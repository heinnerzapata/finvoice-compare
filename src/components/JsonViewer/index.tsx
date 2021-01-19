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
      {/* {props.data && (
        <JSONPretty
          id="json-pretty"
          data={props.data}
          theme={JSONPrettyAcai}
        ></JSONPretty>
      )} */}

      <DropzoneArea onChange={() => null} />
    </div>
  );
};

export default JsonViewer;
