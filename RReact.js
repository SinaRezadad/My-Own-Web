
var Comment = React.createClass({

  getInitialState: function ()  {
          return { editing: false };
        },

  edit: function () {
          this.setState({ editing : true });
        },

  save: function  ()  {
          var val = this.refs.myText.getDOMNode().value;
          alert('new Comment ' + val);
          this.props.updateEachComment(val, this.props.index);
          this.setState({ editing: false });

        },

  remove: function ()  {
          this.setState({ editing: false });
          this.props.removeEachComment(this.props.index);
        },

  renderNormal: function  ()  {
            return (
          <div>
            <p>My Comment Is: {this.props.children}</p>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.remove}>Remove</button>
          </div>
        );
    },
  renderForm: function  ()  {
          return (
          <div>
            <p ref="my"> {this.props.children}</p>
              <textarea  ref="myText"  placeholder="Type Here"></textarea>
            <button onClick={this.save}>Save</button>

          </div>
        );
      },
      render: function () {
             if(this.state.editing){
                return this.renderForm();
              }else{
                return this.renderNormal();
              }
        }

      });



      var Board = React.createClass({
            getInitialState : function(){
              return {
              Commentss: []
                }
            },

          addNew : function(text){
              var arr = this.state.Commentss;
              arr.push(text);
              this.setState({Commentss : arr})
            },

            eachComment : function (text,i){
               return (
                       <Comment key={i} index={i} updateEachComment = {this.updateComment}
                       removeEachComment = {this.removeComment}>
                       {text}
                       </Comment>);
             },

             updateComment : function (newText , i) {
                   var arr = this.state.Commentss;
                   arr[i] = newText;
                   this.setState({Commentss : arr});
             },

             removeComment : function (i){
                   console.log("Removing Comment " + i);
                   var arr = this.state.Commentss;
                   arr.splice(i,1);
                   this.setState({Commentss : arr});
             },

            render : function(){
              return(
                <div>
                    <button onClick={this.addNew}>Add Here</button>
                <div>{this.state.Commentss.map(this.eachComment)} </div>
                </div>
              );
            }
      });
React.render(<Board />, document.getElementById('example'));
