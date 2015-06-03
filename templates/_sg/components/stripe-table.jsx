'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'StripeTable',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <table className="kn-stripe-table">
                <tr>
                    <td className="title">Name</td>
                    <td className="title">Last Name</td>
                    <td className="title">Balance due</td>
                </tr>
                <tr>
                    <td>Name 1</td>
                    <td>Last Name 1</td>
                    <td>Very stuff</td>
                </tr>
                <tr>
                    <td>Name 2</td>
                    <td>Last Name 2</td>
                    <td>Very stuff</td>
                </tr>
                <tr>
                    <td>Name 3</td>
                    <td>Last Name 3</td>
                    <td>Very stuff</td>
                </tr>
            </table>
        );
    }
});
