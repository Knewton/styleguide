'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'SgHeader',

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <header className="sg-header">
                <div className="wrapper">
                    <div className="container">
                        <a href="" id="logo" className="logo-header">
                            <img src="styles/images/logo-grey@2x.png" />
                        </a>
                        <h1>
                            <a href="">
                                Knewton Style Guide / UI Library
                            </a>
                        </h1>
                    </div>
                </div>
            </header>
        );
    }
});
