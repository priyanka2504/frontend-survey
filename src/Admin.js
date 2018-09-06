import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            rate: "",
            framework: "",
            aware: "",
            list: "",
            workshop: "",
            important: "",
            awareyes: "",
            awareno: "",
            ratea: "",
            rateb: "",
            ratec: "",
            frameworka: "",
            frameworkb: "",
            frameworkc: "",
            lista: "",
            listb: "",
            listc: "",
            workshophave: "",
            workshopnot: "",
            importanta: "",
            importantb: "",
            importantc: "",
            importantd: "",
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: "",
            question6: "",
        }
    }

    componentWillMount = () => {
        axios.get("http://localhost:1111/data")
            .then((response) => {
                console.log("response:", response.data);
                this.setState({
                    userData: response.data
                })
                console.log(this.state.userData)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Rate = () => {

        const Rate = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.Rate} */}
            </div>
        )
        this.setState({
            rate: Rate,
            framework: "",
            aware: "",
            list: "",
            workshop: "",
            important: "",
            question1: "How much do you rate yourself in Javascript (in percentage)"
        })

        axios.get("http://localhost:1111/data/rate/a")
            .then((response) => {
                console.log("rate a:", response.data.length);
                this.setState({
                    ratea: response.data.length
                })
                console.log("rate a:", this.state.ratea)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/rate/b")
            .then((response) => {
                console.log("rate b:", response.data.length);
                this.setState({
                    rateb: response.data.length
                })
                console.log("rate b:", this.state.rateb)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/rate/c")
            .then((response) => {
                console.log("rate c:", response.data.length);
                this.setState({
                    ratec: response.data.length
                })
                console.log("rate c:", this.state.ratec)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Framework = () => {
        const Framework = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.Framework} */}
            </div>
        )
        this.setState({
            framework: Framework,
            aware: "",
            list: "",
            workshop: "",
            important: "",
            rate: "",
            question2: "How often do you use Javascript and its frameworks? (in percentage)"
        })
        axios.get("http://localhost:1111/data/framework/a")
            .then((response) => {
                console.log("framework a:", response.data.length);
                this.setState({
                    frameworka: response.data.length
                })
                console.log("framework a:", this.state.frameworka)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/framework/b")
            .then((response) => {
                console.log("framework b:", response.data.length);
                this.setState({
                    frameworkb: response.data.length
                })
                console.log("framework b:", this.state.frameworkb)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/framework/c")
            .then((response) => {
                console.log("framework c:", response.data.length);
                this.setState({
                    frameworkc: response.data.length
                })
                console.log("framework c:", this.state.frameworkc)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Aware = () => {
        const Aware = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.Aware}   */}
            </div>
        )
        this.setState({
            aware: Aware,
            framework: "",
            list: "",
            workshop: "",
            important: "",
            rate: "",
            question3: "Are you aware of ReactJS? (in percentage)"
        })
        axios.get("http://localhost:1111/data/aware/yes")
            .then((response) => {
                console.log("aware yes:", response.data.length);
                this.setState({
                    awareyes: response.data.length
                })
                console.log("aware yes:", this.state.awareyes)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/aware/no")
            .then((response) => {
                console.log("aware no:", response.data.length);
                this.setState({
                    awareno: response.data.length
                })
                console.log("aware no:", this.state.awareno)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    List = () => {
        const List = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.List} */}
            </div>
        )
        this.setState({
            list: List,
            framework: "",
            aware: "",
            workshop: "",
            important: "",
            rate: "",
            question4: "Which among these frameworks have you worked on? (in percentage)"
        })
        axios.get("http://localhost:1111/data/list/a")
            .then((response) => {
                console.log("list a:", response.data.length);
                this.setState({
                    lista: response.data.length
                })
                console.log("list a:", this.state.lista)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/list/b")
            .then((response) => {
                console.log("list b:", response.data.length);
                this.setState({
                    listb: response.data.length
                })
                console.log("list b:", this.state.listb)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/list/c")
            .then((response) => {
                console.log("list c:", response.data.length);
                this.setState({
                    listc: response.data.length
                })
                console.log("list c:", this.state.listc)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Workshop = () => {
        const Workshop = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.Workshop} */}
            </div>
        )
        this.setState({
            workshop: Workshop,
            framework: "",
            aware: "",
            list: "",
            important: "",
            rate: "",
            question5: `Have you attended any workshops on frontend development earlier? (in percentage)`
        })
        axios.get("http://localhost:1111/data/workshop/have")
            .then((response) => {
                console.log("workshop have:", response.data.length);
                this.setState({
                    workshophave: response.data.length
                })
                console.log("workshop have:", this.state.workshophave)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/workshop/not")
            .then((response) => {
                console.log("workshop not:", response.data.length);
                this.setState({
                    workshopnot: response.data.length
                })
                console.log("workshop not:", this.state.workshopnot)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Important = () => {
        const Important = this.state.userData.map((item, key = +1) =>
            <div >
                {/* {item.Important} */}
            </div>
        )
        this.setState({
            important: Important,
            framework: "",
            aware: "",
            list: "",
            workshop: "",
            rate: "",
            question6: "How important do you think learning frontend development is? (in percentage)"
        })
        axios.get("http://localhost:1111/data/important/a")
            .then((response) => {
                console.log("important a:", response.data.length);
                this.setState({
                    importanta: response.data.length
                })
                console.log("important a:", this.state.importanta)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/important/b")
            .then((response) => {
                console.log("important b:", response.data.length);
                this.setState({
                    importantb: response.data.length
                })
                console.log("important b:", this.state.importantb)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/important/c")
            .then((response) => {
                console.log("important c:", response.data.length);
                this.setState({
                    importantc: response.data.length
                })
                console.log("important c:", this.state.importantc)
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:1111/data/important/d")
            .then((response) => {
                console.log("important d:", response.data.length);
                this.setState({
                    importantd: response.data.length
                })
                console.log("important d:", this.state.importantd)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        var chartRate = {
            labels: ['1-4', '4-8', '8-10'],
            datasets: [{
                label: 'How much do you rate yourself in Javascript',
                data: [(this.state.ratea / (this.state.ratea + this.state.rateb + this.state.ratec)) * 100, (this.state.rateb / (this.state.ratea + this.state.rateb + this.state.ratec)) * 100, (this.state.ratec / (this.state.ratea + this.state.rateb + this.state.ratec)) * 100],
                backgroundColor: [
                    '#E57373',
                    '#7986CB',
                    '#4DB6AC',
                ]
            }]
        };



        var chartFramework = {
            labels: ['Daily', 'Weekly', 'Monthly'],
            datasets: [{
                label: 'How often do you use Javascript and its frameworks?',
                data: [(this.state.frameworka / (this.state.frameworka + this.state.frameworkb + this.state.frameworkc)) * 100, (this.state.frameworkb / (this.state.frameworka + this.state.frameworkb + this.state.frameworkc)) * 100, (this.state.frameworkc / (this.state.frameworka + this.state.frameworkb + this.state.frameworkc)) * 100],
                backgroundColor: [
                    '#4DB6AC',
                    '#E57373',
                    '#7986CB',
                ]
            }]
        };

        var chartAware = {
            labels: ['Yes', 'No'],
            datasets: [{
                label: 'Are you aware of ReactJS?',
                data: [(this.state.awareyes / (this.state.awareyes + this.state.awareno)) * 100, (this.state.awareno / (this.state.awareyes + this.state.awareno)) * 100],
                backgroundColor: [
                    '#4DB6AC',
                    '#E57373',
                ]
            }]
        };
        var chartList = {
            labels: ['React', 'Angular', 'None'],
            datasets: [{
                label: 'Which among these frameworks have you worked on?',
                data: [(this.state.lista / (this.state.lista + this.state.listb + this.state.listc)) * 100, (this.state.listb / (this.state.lista + this.state.listb + this.state.listc)) * 100, (this.state.listc / (this.state.lista + this.state.listb + this.state.listc)) * 100],
                backgroundColor: [
                    '#4DB6AC',
                    '#E57373',
                    '#7986CB',
                ]
            }]
        };

        var chartWorkshop = {
            labels: ['Yes', 'No'],
            datasets: [{
                label: 'Have you attended any workshops on frontend development earlier?',
                data: [(this.state.workshophave / (this.state.workshophave + this.state.workshopnot)) * 100, (this.state.workshopnot / (this.state.workshophave + this.state.workshopnot)) * 100],
                backgroundColor: [
                    '#4DB6AC',
                    '#E57373',
                ]
            }]
        };

        var chartImportant = {
            labels: ['Important', 'Very Important', 'Not Important', "Can't say"],
            datasets: [{
                label: 'How important do you think learning frontend development is?',
                data: [(this.state.importanta / (this.state.importanta + this.state.importantb + this.state.importantc + this.state.importantd)) * 100, (this.state.importantb / (this.state.importanta + this.state.importantb + this.state.importantc + this.state.importantd)) * 100, (this.state.importantc / (this.state.importanta + this.state.importantb + this.state.importantc + this.state.importantd)) * 100, (this.state.importantd / (this.state.importanta + this.state.importantb + this.state.importantc + this.state.importantd)) * 100],
                backgroundColor: [
                    '#4DB6AC',
                    '#E57373',
                    '#7986CB',
                    '#F06292',
                ]
            }]
        };

        return (
            <div>
                <h3 align="center" class="text-dark"> Analysis of the survey </h3>
                <div class="analysisRow1">
                    <div class="table-responsive">
                        <div class="container">
                            <div class="row">
                                <table class="table table-borderless">
                                    <tr>
                                        <td> How much do you rate yourself in Javascript </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.Rate}> Analysis </button> </td>
                                    </tr>
                                    <tr>
                                        <td> How often do you use Javascript and its frameworks? </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.Framework}> Analysis </button> </td>
                                    </tr>
                                    <tr>
                                        <td> Are you aware of ReactJS? </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.Aware}> Analysis </button> </td>
                                    </tr>
                                    <tr>
                                        <td> Which among these frameworks have you worked on? </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.List}> Analysis </button> </td>
                                    </tr>
                                    <tr>
                                        <td> Have you attended any workshops on frontend development earlier? </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.Workshop}> Analysis </button> </td>
                                    </tr>
                                    <tr>
                                        <td> How important do you think learning frontend development is? </td>
                                        <td> <button class="btn btn-primary" type="submit" onClick={this.Important}> Analysis </button> </td>
                                    </tr>
                                </table>
                            </div> </div>
                    </div>
                </div>

                <div class="displayData">
                    <div class="analysisRow1">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">

                                    <Pie data={chartRate} />
                                    <p class="text-muted"> {this.state.question1} </p>
                                </div>
                                <div class="col-sm">

                                    <Pie data={chartFramework} />
                                    <p class="text-muted"> {this.state.question2} </p>
                                </div>
                                <div class="col-sm">

                                    <Pie data={chartAware} />
                                    <p class="text-muted"> {this.state.question3} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="analysisRow1">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">

                                    <Pie data={chartList} />
                                    <p class="text-muted"> {this.state.question4} </p>
                                </div>
                                <div class="col-sm">

                                    <Pie data={chartWorkshop} />
                                    <p class="text-muted"> {this.state.question5} </p>
                                </div>
                                <div class="col-sm">

                                    <Pie data={chartImportant} />
                                    <p class="text-muted"> {this.state.question6} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;

