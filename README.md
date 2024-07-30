## Small Notes 
- for ```The service should be
able to handle a request where a derivation is not possible. ```, I assumed that the service will be returning output that will be understood in the frontend that the backend could not derive the email since we do not have a similar domain in our records, this shown below in the screenshots.
- I also made the api a POST request, as I thought assuming this api would normally insert a record for a known domain, however this insertion was not implemented as I wanted to keep developing time within 8 hours as instructed.
- I tried to keep designs for code and UI simple and easy to read and maintain.
- I have used pnpm in both frontend and backend as it is more faster than npm.



# Frontend
- I have used Vite for Frontend
- Mantine UI, Tanstack Router, Tanstack Query adn typescript as they provide typesafety and easy to use with well documentation.
- Tanstack query is smart with caching techniques and gives helpful hooks that make the code simpler.
- Also Tanstack tools provide really great devtools that can come handy and let you debug easier.
- I am also familiar with those technologies and have made few projects with them with similiar structure, so this would make me move faster.


# Backend
- I have used for backend Express since I need to keep it as minimal as possible and lightweight.
- I used layered architecture, however express does not have native DI. So I had to mimic Dependency Injecion.
- I tried to follow clean architecture and keep code clean as simple in the given timeframe.
- I also tried to keep dependencies at minimal
- I wrote tests for the critical paths using jest.


Thanks for reading this document!


# Some Screenshots

### fetched data 
![image](https://github.com/user-attachments/assets/45ee8f5d-bf3e-406b-b62b-a597005a9c8d)

![image](https://github.com/user-attachments/assets/4fcc29e1-e0b9-471c-b311-414bd54bca12)


### error in network handling 
![image](https://github.com/user-attachments/assets/e366a0aa-8c54-4b57-a983-1edfb3406175)

### 404 page
![image](https://github.com/user-attachments/assets/0d49e6ce-50ec-49e0-9bb7-ef55b4fd3c4d)

