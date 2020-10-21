## Steps to use the repository

1. Download the repository
2. In 'parrot-analytics' folder, run 'npm install' to install the node modules
3. Run 'npm start' to run the dev server at 'http://localhost:3000/' 

## Technology Used

1. Framework -React - As the application is highly view oriented, I have used React
2. State Maintenance - Redux  
3. Design Libraries - Bootstrap - To leverage the Flexbox design
4. Design Libraries - SASS - To leverage the theming of the website
5. Basic routing is done considering scalability in future and to showcase coding ability 

## Architecture - Highly Scalable

1. React Atomic Architecture is implemented - chunks of components as atoms, molecules and organisms
2. Styling (SASS) Atomic Architecture is implemented - to support theming 
3. Custom components has been built - Custom Dropdown, Error Boundary (Toast)
4. REM concept implemented - Complete responsiveness of the website using a mixin (Refer calcRem() function in _mixins.scsss)
5. Global Utility functions implemented for scalability - eg., setLocalStorage, getLocalStorage, isEmptyObject, deepCopy, etc., (Refer utils/deps.js)

## Functionalities Implemented

1. Completely responsive design supporting higher than 360px
2. Authentication done and APIs integrated and consumed
3. 'List of Platforms' API integrated
4. 'Rank - Top 10 TV shows' API integrated
5. Market selector implemented - custom component has been built
6. Date Range selector implemented - custom component has been built 
7. Search Functionality implemented
8. NavList is used under 'utils' folder in such a way that it can be scaled 
9. Smooth animations implemented

## Future Suggestions

1. BEM Styling will be implemented
2. Icons (SVG format) will be converted to fonts using icomoon, which helps in optimising performance
3. Module based access permission will be implemented