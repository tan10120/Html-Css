const form = document.querySelector('form'); form.addEventListener('submit', validateForm);
function validateForm(e) { e.preventDefault();
let valid = true;
// Validate first name
const firstName = document.querySelector('input[name="fname"]'); if(firstName.value === '') {
alert('Please enter your first name');
valid = false; }
// Validate last name
const lastName = document.querySelector('input[name="lname"]'); if(lastName.value === '') {
alert('Please enter your last name');
valid = false; }
// Validate email
const email = document.querySelector('input[name="email"]'); if(email.value === '') {
alert('Please enter your email address');
valid = false; }
// Validate phone
const phone = document.querySelector('input[name="phone"]'); if(phone.value === '') {
alert('Please enter valid phone number');
valid = false; }
// Validate password
const password = document.querySelector('input[name="pass"]'); if(password.value === '') {
alert('Please enter a password');
valid = false; }
// Validate confirm password
const confirmPassword = document.querySelector('input[name="confpass"]'); if(password.value !== confirmPassword.value) {
alert('Passwords do not match');
valid = false; }
// Validate gender
const gender = document.querySelector('input[name="gender"]'); if(!gender.checked) {
alert('Please select your gender');
valid = false; }
if(valid) { form.submit();
} }