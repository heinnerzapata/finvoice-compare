import * as React from "react";
import styles from "./compare.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import JsonViewer from "./../../components/JsonViewer";
import { pctSameProps } from "./../../utils/score";

interface ICompareProps {}

interface ICompareState {
  data1: any;
  data2: any;
}

export class Compare extends React.PureComponent<ICompareProps, ICompareState> {
  state = {
    data1: null,
    data2: null,
  };

  handleData1 = (data1: Object) => {
    this.setState({ data1 });
  };

  handleData2 = (data2: Object) => {
    this.setState({ data2 });
  };

  getScore = () => {
    return (
      <span>{`Score: ${pctSameProps(
        this.state.data1,
        this.state.data2
      )}%`}</span>
    );
  };

  render() {
    return (
      <div className={styles.compare}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Paper className={styles.paper}>
              <JsonViewer onDataChange={this.handleData1} />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={styles.paper}>
              <JsonViewer onDataChange={this.handleData2} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {this.state.data1 && this.state.data2 && (
              <div className={styles.resultContainer}>{this.getScore()}</div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
