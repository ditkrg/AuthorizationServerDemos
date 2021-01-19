Start-Process -FilePath "dotnet" -ArgumentList "run" -WorkingDirectory ./CSharp/AuthorizationServer
Start-Process -FilePath "dotnet" -ArgumentList "run" -WorkingDirectory ./CSharp/TrafficPoliceApi
Start-Process -FilePath "dotnet" -ArgumentList "run" -WorkingDirectory ./CSharp/TaxApp

Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ./React/traffic-police/
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ./React/real-estate/
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ./Node/real-estate