import React from "react";
import JSONPretty from "react-json-pretty";
import { DropzoneArea } from "material-ui-dropzone";
import styles from "./jsonViewer.module.scss";
import "react-json-pretty/themes/monikai.css";
var JSONPrettyAcai = require("react-json-pretty/dist/acai");

export interface IJsonViewerProps {
  data: any;
}

const JsonViewer: React.FC<IJsonViewerProps> = (props) => {
  return (
    <div className={styles.jsonViewer}>
      <h3></h3>
      {/* {props.data && (
        <JSONPretty
          id="json-pretty"
          data={props.data}
          theme={JSONPrettyAcai}
        ></JSONPretty>
      )} */}

      <DropzoneArea
        onChange={(file) => {
          let reader = new FileReader();

          reader.onload = function () {
            console.log(JSON.parse(reader.result));
            debugger;
          };
    
          if (file[0] !== undefined) {
            reader.readAsText(file[0]);
          }

          debugger;
        }}
      />
    </div>
  );
};

export default JsonViewer;
