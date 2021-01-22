import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import JSONPretty from "react-json-pretty";
import { DropzoneArea } from "material-ui-dropzone";
import styles from "./jsonViewer.module.scss";
import "react-json-pretty/themes/monikai.css";
var JSONPrettyAcai = require("react-json-pretty/dist/acai");

export interface IJsonViewerProps {
  onDataChange: (data: Object) => void;
}

const JsonViewer: React.FC<IJsonViewerProps> = (props) => {
  const [data, setData] = useState<Object>(null);
  const [dataName, setDataName] = useState<string>("");

  const handleButton = (event: any) => {
    setData(null);
    setDataName("");
    props.onDataChange(null);
  };

  return (
    <div className={styles.jsonViewer}>
      <div className={styles.info}>
        <h3>{dataName}</h3>
        {data && (
          <Button onClick={handleButton} variant="contained" color="secondary">
            Clear
          </Button>
        )}

        {!data && <h3>{`Drag your JSON file`}</h3>}
      </div>
      <div className={styles.dataContainer}>
        {data && (
          <JSONPretty
            id="json-pretty"
            data={data}
            theme={JSONPrettyAcai}
          ></JSONPretty>
        )}
      </div>

      {!data && (
        <DropzoneArea
          onChange={(file) => {
            let reader = new FileReader();
            reader.onload = function () {
              let newData = JSON.parse(reader.result as string);
              setData(newData);
              props.onDataChange(newData);
            };

            if (file[0] !== undefined) {
              setDataName(file[0].name);
              reader.readAsText(file[0]);
            }
          }}
        />
      )}
    </div>
  );
};

export default JsonViewer;
