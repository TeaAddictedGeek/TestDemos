
class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
            </div>
        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
}

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
                <Hello message="my friend" />, 
            </div>
        );
    }
}

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "my friend (from changed state)!"
        });
    }   

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.updateMessage}>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);