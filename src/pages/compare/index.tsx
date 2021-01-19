import * as React from "react";
import styles from "./compare.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import JsonViewer from "./../../components/JsonViewer";

interface ICompareProps {}

interface ICompareState {
  data1: any;
  data2: any;
}

export class Compare extends React.PureComponent<ICompareProps, ICompareState> {
  state = {
    data1: { test: "heinner" },
    data2: { test: { heinner: "name" } },
  };

  render() {
    return (
      <div className={styles.compare}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Paper className={styles.paper}>
              <JsonViewer data={this.state.data1} />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={styles.paper}>
              <JsonViewer data={this.state.data2} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
