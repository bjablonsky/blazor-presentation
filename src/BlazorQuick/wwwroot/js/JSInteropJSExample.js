// Using the Blazor.registerFunction function, we specify the name of the call coming from C# as the first parameter and the arguments as the second parameter
// See /Pages/JSInterop.cshtml for the example.
// Also note that we included this JS file in the /wwwroot/index.html HTML file

Blazor.registerFunction('InteropAlert', (message) => {
    alert(message);
    console.log(message);
    return true;
});