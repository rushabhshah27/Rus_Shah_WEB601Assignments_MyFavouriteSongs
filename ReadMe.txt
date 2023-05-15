I followed these steps:

1. Install Node.js: 
  - Click the provided link to download NodeJS.
  
2. Verify the NodeJS and npm versions: 
  - Run the following commands at command prompt:
   - "node -v" & "npm -v"
   
3. Set up Angular CLI: 
  - Run the line at the command prompt: "npm install -g @angular/cli"

4. Start a fresh Angular project: 
  - Run the command: "ng new Rus_Shah_MyFavoriteSongs"

5. Project setup options: 
  - Choose "No" when queried about Angular routing.
  - Select "SCSS" as the style choice.

6. Open the Project in VS Code: 
  - Visual Studio Code should be opened.

7. To Generate components and files - These commands are added in package.json:

  Generate components:
   - To create components: 'ng generate component'
   - To generate pipes, used 'ng generate pipe'
   - For directives, used 'ng generate directive'

8. Refresh the version in the package.json file, and modify the version to "0.0.1".

9. Create a helper-files folder: 
  - Inside the app folder, create a "helper-files" folder.

10. Include files: 
  Include the following files in the "helper-files" folder:
  1. content-interface.ts
  2. content-list.ts

11. Generate the content-card component: 
  - Run 'ng generate component content-card' in command prompt to generate the component files.

12. Edit content-card files: 
  Make changes to the HTML and TypeScript files for the content-card component with the necessary codes.

13. Add the app-content-card element: 
  <app-content-card></app-content-card> added to HTML file.
