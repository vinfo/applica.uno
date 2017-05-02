/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        checkConnection();
        $("#centralContent").load("http://applica.uno/mobil/nueva_inicio_sesion_personas.php", function () {
            console.log("Contenido cargado exitosamente.");
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
function getDeviceProperty()
{
     console.log("getDeviceProperty");
     var deviceOS  = device.platform  ;  //fetch the device operating system
     var deviceOSVersion = device.version ;  //fetch the device OS version
     var uuid=  device.uuid;
     localStorage.setItem("OS",deviceOS);
     localStorage.setItem("UUID",uuid);
     console.log("Plataforma registrada "+device.platform);
}
function checkConnection() {
    console.log("checkConnection");
    var state=true;
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection'; 
    
    var page=getNameURLWeb();
    if(states[networkState]=='No network connection'){
        //navigator.notification.beep(1);        
        if(page!="offline.html"){
            alert('Internet es requerido!');        
            window.location.href = 'offline.html';
        }
        //throw new Error('No Internet Connection.');  
        state=false;                            
    }else{
        if(page=="offline.html")window.location.href = 'index.html';
    }
    return state;    
}
function getNameURLWeb(){
 var sPath = window.location.pathname;
 var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
 return sPage;
}
