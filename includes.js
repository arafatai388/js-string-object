const email = "mama@mami.com";

if (email.toLowerCase().includes(".com")) {
    console.log("Email contains .com");
}

const fileName = "My Final Project.pdf";

if (fileName.endsWith(".pdf")) {
    console.log("PDF file detected");
} else {
    console.log("Not a PDF file");
}

const twitterHandle = "@elonmusk";

if (twitterHandle.startsWith("@")) {
    console.log("Valid Twitter handle");
}