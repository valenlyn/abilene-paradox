var React = require("react");

class Pokemon extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div>
            <p>HI BITCHY</p>
            <form method="POST" action="/new" accept-charset="UTF-8">

                    <input type="text" name="topic" autoFocus/>

                <button type="submit" class="form-btn">Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Pokemon;