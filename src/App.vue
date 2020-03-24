<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style type="text/css">
body {
    background: #F0F0F7;
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
    margin: 0px;
    display: block;
}

.label-inline-s {
    font-size: 15px;
    letter-spacing: 0.7px;
    margin: 0px;
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

.input-edit-s{
	background-color: #FFFFFF;
	color: black;
    display: block;
    height: 35px !important;
    font-size: 12.5px !important;
	padding-left: 10px;
	border: 1px solid lightgray;
	border-radius: 4px;
	letter-spacing: 0.7px;
}

.input-area-s{
	background-color: #FFFFFF;
	color: black;
    display: block;
    font-size: 12.5px !important;
	padding: 15px;
	border: 1px solid lightgray;
	border-radius: 4px;
	letter-spacing: 0.7px;
}

.input-select-s{
	background-color: #FFFFFF;
	color: dimgray;
    height: 35px !important;
    font-size: 12.5px !important;
	border: 1px solid lightgray;
	border-radius: 4px;
	letter-spacing: 0.7px;
	text-indent: 10px;
}

.input-view-s{
	background-color: #FFFFFF;
	color: dimgray;
    display: block;
    height: 30px !important;
    font-size: 15px !important;
	padding: 15px;
	border: 0px;
	pointer-events: none;
	letter-spacing: 0.5px;
}

.input-view-border-0{
	background-color: #FFFFFF;
	color: dimgray;
    display: block;
    height: 35px !important;
    font-size: 15px !important;
	padding: 15px;
	border: 0px solid;
	pointer-events: none;
	letter-spacing: 0.5px;
}

.input-edit-s:focus {
    background-color: white;
}

.b-bottom-action:focus{
	border-bottom: 3px solid #42BDCF;
}

.border {
	border: 1px solid #42BDCF;
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

.t-primary {
	color: #4E73DF;
}

.t-dimgray {
	color: dimgray;
}

.t-dimgray-14 {
	color: dimgray;
	font-size: 14px;
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
</style>
