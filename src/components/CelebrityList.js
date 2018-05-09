import React from "react";

class CelebrityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    componentWillReceiveProps() {
           fetch("https://crud9x.herokuapp.com/api/celebrities")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        fetch("https://crud9x.herokuapp.com/api/celebrities")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row">
                    {items.map(item => (
                        <div className="col-md-4" key={item.id}>
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" width="300" height="400"
                                     src={item.image_url}
                                     alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title"> {item.name} </h3>
                                        <p className="card-text"> {item.description} </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Cập Nhật
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        ))
                        }
                </div>
            );
        }
    }
}

export default CelebrityList;
