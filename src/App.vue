<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/javascript">
export default {
    created() {
        if (this.$store.state.api_host == 'live') {
            this.$store.state.media = 'http://174.138.20.23:8081/pis/public/'
            this.$store.state.pis = 'http://174.138.20.23:8081/pis/api/'
            this.$store.state.pis_assets = 'http://174.138.20.23:8081/pis/assets/'
        }
    }
};
</script>

<style type="text/css">
body {
    background: #E4E4E4;
}

img {
    object-fit: cover;
}

.standard-text {
    height: 30px !important;
    font-size: 14px !important;
}

.standard-label{
    font-size: 11px !important;
}

.form-s{
	padding: 5px 0px 5px 0px;
	/*border: 1px solid black;*/
}

.label-s{
    font-size: 13px;
    letter-spacing: 0.7px;
    margin: 0px !important;
    display: block;
}

.label-inline-s {
    font-size: 15px;
    letter-spacing: 0.7px;
    margin: 0px;
}

.inline { 
    float: left !important;
}

.title-s {
    font-size: 15px;
    letter-spacing: 0.7px;
    margin: 0px;
}

.title-md {
    font-size: 18px;
    letter-spacing: 0.7px;
    margin: 0px; 
}

.title-lg {
    font-size: 20px;
    letter-spacing: 0.7px;
    margin: 0px;
}

/* Forms*/
/*.input-edit-s:focus {
    border-color: #F1BE3D !important;
    box-shadow: 0 0 0 0.2rem rgba(241, 190, 61, 0.25) !important;
} */

.input-edit-s {
	background-color: #F8F9FC ;
	color: dimgray;
    display: block;
    height: 35px !important;
    font-size: 14px !important;
	padding-left: 15px;
	border: 1px solid lightgray;
	border-radius: 4px;
	letter-spacing: 0.7px;
}

.input-area-s {
    background-color: #F8F9FC;
    color: dimgray;
    display: block;
    font-size: 14px !important;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
    letter-spacing: 0.7px;
}

.input-area-view-s {
    background-color: #FFFFFF;
    color: dimgray;
    font-size: 14px !important;
    padding: 15px;
    border: 0px;
    pointer-events: none;
    letter-spacing: 0.7px;
}

.input-select-s {
	background-color: #F8F9FC;
	color: dimgray;
    height: 35px !important;
    font-size: 14px !important;
	border: 1px solid lightgray;
	border-radius: 4px;
	letter-spacing: 0.7px;
	text-indent: 10px;
}

.input-view-s {
    background-color: #FFFFFF;
    color: dimgray;
    height: 35px !important;
    font-size: 14px !important;
    padding: 15px;
    margin: 0px;
    border: 0px;
    pointer-events: none;
    letter-spacing: 0.5px;
}

.input-view-m {
    background-color: #FFFFFF;
    color: dimgray;
    height: 30px !important;
    font-size: 14px !important;
    padding: 10px;
    border: 0px;
    pointer-events: none;
    letter-spacing: 0.5px;
}

.input-view-border-0{
	background-color: #FFFFFF;
	color: dimgray;
    display: block;
    height: 35px !important;
    font-size: 14px !important;
	padding: 15px;
	border: 0px solid;
	pointer-events: none;
	letter-spacing: 0.5px;
}

.input-edit-s:focus, .input-area-s:focus, .input-select-s:focus {
    background-color: white;
    /*outline: none !important;
    border-bottom: 2px solid #2A3F54 !important;*/
}


/************************ Borders **************************/

.border {
    border: 1px solid #42BDCF;
}

.border-brown {
    border: 1px solid #C8923B !important;
}

/* Border Left */

.b-left-warning {
    border-left: 1px solid #F7C649 !important;
}

/* Border Right */

.b-right-warning {
    border-right: 1px solid #F7C649 !important;
}

/* Border Bottom */

.border-bottom-white {
    border: 0px;
    border-bottom: 1px solid white !important;
}

.b-bottom-dark {
    border-bottom: 1px solid #C8C8C8;
}

.b-bottom-action:focus{
	border-bottom: 3px solid #42BDCF;
}



.pointer {
    cursor: pointer;
}

.u-hover:hover {
    text-decoration: underline;
    cursor: pointer;
}

.primary-hover:hover {
    color: #4E73DF;
    cursor: pointer;
}

.t-xss {
	font-size: 11px !important;
}

.t-xs {
	font-size: 12px !important;
}

.t-sm {
	font-size: 13px !important;
}

.t-md {
    font-size: 14px !important;
}

.t-lg {
    font-size: 16px !important;
}

.t-xl {
    font-size: 18px !important;
}

.t-primary {
    color: #4E73DF;
}

.t-success {
    color: #1CC88A;
}

.t-dimgray {
	color: dimgray;
}

.t-silver {
    color: #C8C8C8;
}

.t-brown {
    color: #C8923B;
}

.t-darkblue {
    color: #2A3F54;
}

.t-dimgray-14 {
    color: dimgray;
    font-size: 14px;
    letter-spacing: 0.7px;
}

.t-dimgray-16 {
    color: dimgray;
    font-size: 16px;
    letter-spacing: 0.7px;
}

.t-light {
    color: #F3F2EE;
}

.t-light-gray {
    color: lightgray;
}

.b-primary {
    background-color: #007BFF !important;
}

.b-success {
    background-color: #1CC88A !important;
}

.b-brown {
    background-color: #C8923B !important;
    opacity: 1;
}

.b-lightblue {
    background-color: #C1C3CD !important;
}

.b-darkblue {
    background-color: #2A3F54 !important;
}

.b-transparent {
    background-color: transparent;
}

.btn-brown {
    background-color: #C8923B !important;
    color: white !important;
    opacity: 0.8;
}

.btn-brown:hover {
    opacity: 1;
}

.btn-brown-outline {
    background-color: white !important;
    color: #C8923B !important;
    border: 1px solid #C8923B !important;
}

.btn-brown-outline:hover {
    background-color: #C8923B !important;
    color: white !important;
}

.w-15{
	width: 15%;
}

.t-uppercase {
	text-transform: uppercase;
}

.t-label-uppercase {
	text-transform: uppercase;
	font-size: 10px !important;
}

.bold {
	font-weight: bold;
}

select option[disabled]:first-child {
	display: none;
}

#upload {
  text-align: center;
}

.img-upload {
  width: 150px;
  height: 150px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}


.btn-file {
    position: relative;
    overflow: hidden;
}

.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;   
    cursor: inherit;
    display: block;
}

.pointer {
      cursor: pointer !important;
}

.hover:hover {
    border-bottom: 2px solid #315CDA;
}
</style>
