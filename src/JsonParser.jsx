import React from "react";
import PropTypes from "prop-types";

export default class JsonParser extends React.Component {
  static propTypes = {
    json_data: PropTypes.object.isRequired
  };

  static indent = child => {
    return (
      <details style={{ marginLeft: "1rem", flex: 1 }}>
        <summary>Show More</summary>
        {child}
      </details>
    );
  };

  constructor(props) {
    super(props);
    this.json_data = props.json_data;
    this.counter = 0;
  }

  render_json(json) {
    if (typeof json !== "object") {
      return json;
    } else if (json.constructor === Array) {
      return JsonParser.indent(this.render_array(json));
    } else {
      return JsonParser.indent(this.render_object(json));
    }
  }

  render_array(json_array) {
    console.log("LOL");
    return json_array.map((val, index) => {
      return (
        <div style={{ display: "flex" }}>
          <span>
            <b>{"#" + index + ": "}</b>
          </span>
          {this.render_json(val)}
        </div>
      );
    });
  }

  render_object(json_object) {
    return Object.entries(json_object).map(([key, val], index) => {
      return (
        <div key={index}>
          <b>{key} : </b>
          {this.render_json(val)}
        </div>
      );
    });
  }

  render() {
    return this.render_json(this.json_data);
  }
}
