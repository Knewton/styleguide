'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Table',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <table className="kn-table">
                <tr>
                    <td className="title">Name</td>
                    <td className="title">Dahell</td>
                    <td className="title">How much?</td>
                </tr>
                <tr>
                    <td>Dahell 1</td>
                    <td>Much dahell</td>
                    <td>Very dahell</td>
                </tr>
                <tr>
                    <td>Dahell 2</td>
                    <td>Much dahell</td>
                    <td>Very dahell</td>
                </tr>
                <tr>
                    <td>Dahell 3</td>
                    <td>Much dahell</td>
                    <td>Very dahell</td>
                </tr>
            </table>
        );
    }
});
