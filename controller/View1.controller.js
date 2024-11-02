sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("apodui5.controller.View1", {
        onInit: function () {
            this.getView().setModel(new JSONModel(),"nasaModel");
            this.callApiApod();
        },
        callApiApod: function ( ) {
            const key = "DEMO_KEY"; 
            const URL = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.getView().getModel("nasaModel").setProperty('/apod', data)
            })
            .catch(error => {
                console.log("Erro!", error)
            }
        )
        }
    });
});
