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
6. Charting Libraries - Not used as it was not provided in the requirement

## Architecture - Highly Scalable

1. React Atomic Architecture is implemented - chunks of components as atoms, molecules and organisms
2. Styling (SASS) Atomic Architecture is implemented - to support theming 
3. Custom components has been built - Custom Dropdown, Error Boundary (Toast)
4. REM concept implemented - Complete responsiveness of the website using a mixin (Refer calcRem() function in _mixins.scsss)
5. Global Utility functions implemented for scalability - eg., setLocalStorage, getLocalStorage, isEmptyObject, deepCopy, etc., (Refer utils/deps.js)

## Functionalities Implemented

1. Platform Page is completed (logos, icons are missing as it was not provided)
2. Completely responsive design supporting higher than 360px
3. Authentication done and APIs integrated and consumed (Token expiry has not been handled as expires time is not provided in the response)
4. 'List of Platforms' API integrated
5. 'Rank - Top 10 TV shows' API integrated
6. Market selector implemented - custom component has been built
7. Date Range selector implemented - custom component has been built 
8. Search Functionality implemented
9. NavList is used under 'utils' folder in such a way that it can be scaled 
10. Smooth animations implemented

## Not implemented

1. Lazy load - Tried using react infinite scroll component. However, ran into errors and because of the timeline removed it from the code

## Future Suggestions

1. BEM Styling can be implemented
2. Icons (SVG format) can be converted to fonts using icomoon, which helps in optimising performance
3. Module based access permission can be implemented

## Note

1. The design has three different categories (Most In Demand, TV Shows Heating Up). However, the APIs for this has not been provided and so only Top 10 TV Shows API has been implemented
2. Functionality for clicking the platform from the list has not been implemented as it was not mentioned in the requirement