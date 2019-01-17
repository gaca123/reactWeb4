/*import React from "react";
 import { render } from "react-dom";
 import Form from "react-jsonschema-form";
 import { TypeaheadField } from "react-jsonschema-form-extras/lib/TypeaheadField";
 
 const schema = {
 title: "Typeahead",
 type: "object",
 required: ["state"],
 properties: {
 state: { type: "string", title: "State" }
 }
 };
 
 const uiSchema = {
 state: {
 "ui:field": "typeahead",
 typeahead: {
 minLength: 0,
 options: ["New York", "Washington", "California"]
 }
 }
 };
 
 const App = () => (
 <Form
 schema={schema}
 uiSchema={uiSchema}
 fields={{ typeahead: TypeaheadField }}
 />
 );
 
 render(<App />, document.getElementById("root"));*/

/*import React from "react";
 import { render } from "react-dom";
 import Form from "react-jsonschema-form";
 
 const schema = {
 title: "Todo",
 type: "object",
 required: ["title"],
 properties: {
 title: {type: "string", title: "Title", default: "A new task"},
 done: {type: "boolean", title: "Done?", default: false}
 }
 };
 
 const log = (type) => console.log.bind(console, type);
 
 render((
 <Form schema={schema}
 onChange={log("changed")}
 onSubmit={log("submitted")}
 onError={log("errors")} />
 ), document.getElementById("root"));*/
import React from 'react'
        import Fetch from 'react-fetch'
        import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Form from "react-jsonschema-form";
import fields from "react-jsonschema-form-extras";
const schema11 = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};
let uiSchema;
let schema;
let formData;
const log = (type) => console.log.bind(console, type);
export default class App extends React.Component {

    render() {
        return (
                <Fetch url="http://localhost:9092/schemaExample4">
                    <TestComponent/>
                </Fetch>
                )
    }

};

class TestComponent extends React.Component {
    render() {
        console.log(this.props);
        schema = this.props;
        
        //console.log(schema);
        //return <div><Form schema={schema} />;</div>;
        return (<Fetch url="http://localhost:9092/formExample4">
            <TestComponent1/>
        </Fetch>);
    }

}
;

class TestComponent1 extends React.Component {
    render() {
        console.log(this.props);
        uiSchema = this.props;

        //console.log(schema);
        //return <div><Form schema={schema} />;</div>;<Fetch url="http://localhost:8083/getModelIzvod"></Fetch>
        return (<Fetch url="http://localhost:9092/modelExample4">
            <TestComponent2/>
        </Fetch>);
    }

}
;
class TestComponent2 extends React.Component {
    render() {
        console.log(this.props);
        formData = this.props;
        let onSubmit = ({formData}) => window.alert(JSON.stringify(formData));
       // schema.properties= uiSchema.datasource;
       // schema.properties = uiSchema.datasource1;
        //console.log(schema);
        return <div><Form fields={fields} schema ={schema} uiSchema={uiSchema} formData = {formData} onSubmit={onSubmit}/>;</div>;
    }

}
;


/*<Fetch url="http://localhost:8090/api/ui"></Fetch>;
 const schema = this.props;
 const log = (type) => console.log.bind(console, type);*/
render(<App/>, document.getElementById("root"));

    