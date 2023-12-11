import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    console.log(email, name, message);

    if (!isInputValid(email, name, message)) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    try {
      const filePath = buildFilePath("messages.json");
      const data = extractData(filePath);
      data.push({ id: new Date().toISOString(), email, name, message });
      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (error) {
      res.status(500).json(error.message);
    }

    res.status(201).json({
      message: `message sent! with email: ${email}`,
      email,
    });
  }
}

function isInputValid(email, name, text) {
  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !text ||
    text.trim() === ""
  ) {
    return false;
  }
  return true;
}

function buildFilePath(fileName) {
  return path.join(process.cwd(), "data", fileName);
}

function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);

  if (fileData.toString().length === 0) {
    fs.writeFileSync(filePath, JSON.stringify([]));
    return [];
  }
  const data = JSON.parse(fileData);
  return data;
}
