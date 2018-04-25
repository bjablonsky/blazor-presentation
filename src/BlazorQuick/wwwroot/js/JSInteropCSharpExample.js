// This JS function calls the C# method "Shape" using the Blazor.platform.findMethod() function.
// See /Pages/CSharpInterop.cshtml for the example.
// Also note that we included this JS file in the /wwwroot/index.html HTML file

function shape(s) {
    // Define the method we want to call using the findMethod
    // First parameter is the assembly name
    // Second parameter is the namespace
    // Third parameter is the type name
    // Fourth parameter is the method name
    const shapeMethod = Blazor.platform.findMethod(
        'BlazorQuick',
        'BlazorQuick.Client',
        'CSharpInterop',
        'Shape'
    );

    // Call the C# method by using the callMethod function
    // First parameter is the target method we defined above
    // Second parameter is the object instance which is null since it's a static method
    // Third parameter are the parameters we're passing to the C# method that are converted to a DotNetString
    let result = Blazor.platform.callMethod(shapeMethod, null, [Blazor.platform.toDotNetString(s)]);

    // We then get the result back and convert it to a JavaScriptString to display the message
    let message = Blazor.platform.toJavaScriptString(result);

    alert(message);
}