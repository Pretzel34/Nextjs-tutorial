import fs from 'fs';
import path from 'path';

function handler(req, res) {
    if (req.method === 'POST'){
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        };

        // store in a db or a file
        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        console.log(data);
        fs.writeFileSync(filePath, JSON.stringify(data));
        req.status(201).json({message: "Success!", feedback: newFeedback});
    }else{
        res.status(200).json({message: 'This works'});
    }
}


export default handler;