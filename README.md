## What is this?

This project contains the code and assets for my personal website.

## Setting up development environment 🛠

```sh
npm install
npm start
```

## Setting up a deployment

> Generate an SSH Key

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

> Add the public key to NearlyFreeSpeech

> Add Service Connection in Azure Devops

1. In Azure Devops, navigate to the `Project Settings` for the project where your pipelines are held
2. Navigate to the `Service Connections` tab
3. Press `New service connection` and select `SSH`
5. Fill out the form as such and press `Verify and save`:

| Input | Value | 
| ------------- |-------------:|
| Host name | `ssh.phx.nearlyfreespeech.net` |
| Port number   | `22`   | 
| Private Key   | The private key of the newly generated SSH Key   | 
| Username   | NearlyFreeSpeech SSH Username   | 
| Password/Passphrase   | NearlyFreeSpeech SSH Password    | 
| Service connection name   | `nearlyfreespeech`   |
| Grant access permission to all pipelines   | Checked   | 