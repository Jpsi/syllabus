(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{223:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return a?i.a.createElement(h,l(l({ref:t},b),{},{components:a})):i.a.createElement(h,l({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},276:function(e,t,a){"use strict";a.r(t),t.default=a.p+"c2f05eb31e66cf61b99697863d78761a.png"},277:function(e,t,a){"use strict";a.r(t),t.default=a.p+"52d328a41268016193719ec9b81b5ea0.png"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),i=a(6),o=(a(0),a(223)),r={id:"lesson",title:"Database 1 - Introduction to SQL",sidebar_label:"Lesson"},l={unversionedId:"db/week-1/lesson",id:"db/week-1/lesson",isDocsHomePage:!1,title:"Database 1 - Introduction to SQL",description:"What will we learn today?",source:"@site/docs/db/week-1/lesson.md",permalink:"/db/week-1/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/db/week-1/lesson.md",sidebar_label:"Lesson",sidebar:"SQL",previous:{title:"Databases (SQL)",permalink:"/db/index"},next:{title:"Instructor Notes",permalink:"/db/week-1/instructors"}},s=[{value:"What will we learn today?",id:"what-will-we-learn-today",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Introduction to databases",id:"introduction-to-databases",children:[{value:"Why do we need them?",id:"why-do-we-need-them",children:[]},{value:"Different types of database",id:"different-types-of-database",children:[]}]},{value:"Introduction to PostgreSQL",id:"introduction-to-postgresql",children:[{value:"What is SQL?",id:"what-is-sql",children:[]},{value:"What is a RDBMS?",id:"what-is-a-rdbms",children:[]},{value:"What characterizes a relational database?",id:"what-characterizes-a-relational-database",children:[]},{value:"Database modeling exercise",id:"database-modeling-exercise",children:[]},{value:"Check your PostgreSQL installation",id:"check-your-postgresql-installation",children:[]}]},{value:"Communicating with the database using SQL",id:"communicating-with-the-database-using-sql",children:[{value:"Creating a new database",id:"creating-a-new-database",children:[]},{value:"Creating a table",id:"creating-a-table",children:[]},{value:"Inserting data",id:"inserting-data",children:[]},{value:"Retrieving data",id:"retrieving-data",children:[]},{value:"Retrieving data with conditions",id:"retrieving-data-with-conditions",children:[]}]},{value:"Homework",id:"homework",children:[{value:"Submission",id:"submission",children:[]},{value:"Tasks",id:"tasks",children:[]}]}],b={rightToc:s};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-will-we-learn-today"},"What will we learn today?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#introduction-to-databases"}),"Introduction to databases"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Why do we need them?"),Object(o.b)("li",{parentName:"ul"},"Different types of database"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#introduction-to-postgresql"}),"Introduction to PostgreSQL"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"What is SQL?"),Object(o.b)("li",{parentName:"ul"},"What is a RDBMS?"),Object(o.b)("li",{parentName:"ul"},"What characterises a relational database?"),Object(o.b)("li",{parentName:"ul"},"Database modeling exercise"),Object(o.b)("li",{parentName:"ul"},"Check your PostgreSQL installation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#communicating-with-the-database-using-sql"}),"Communicating with the database using SQL"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Creating a new database"),Object(o.b)("li",{parentName:"ul"},"Creating a table"),Object(o.b)("li",{parentName:"ul"},"Inserting data"),Object(o.b)("li",{parentName:"ul"},"Retrieving data"),Object(o.b)("li",{parentName:"ul"},"Retrieving data with conditions"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#homework"}),"Homework"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(o.b)("p",null,"By the end of this lesson students should be able to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Explain why databases are needed in Web Development"),Object(o.b)("li",{parentName:"ul"},"Define what SQL is and what it is used for"),Object(o.b)("li",{parentName:"ul"},"Describe what ",Object(o.b)("inlineCode",{parentName:"li"},"table"),", ",Object(o.b)("inlineCode",{parentName:"li"},"rows")," and ",Object(o.b)("inlineCode",{parentName:"li"},"columns")," are used for in a relational database"),Object(o.b)("li",{parentName:"ul"},"Install and create a database using PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"Create a table in a database using PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"Insert data into a table using PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"Retrieve data from a table using PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"Retrieve data from a table using conditionals in PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"List the different kinds of data that can be held in a PostgreSQL database")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"introduction-to-databases"},"Introduction to databases"),Object(o.b)("p",null,"A database is a structured set of data held in a computer. It provides ways to store, retrieve and organize information."),Object(o.b)("h3",{id:"why-do-we-need-them"},"Why do we need them?"),Object(o.b)("p",null,"In the past few weeks, you stored and retrieved data using files. This is fine for simple data but it can quickly become an issue as your application becomes more complex and needs to store and manipulate more complicated data. For example, imagine you want to develop the next biggest hotel booking application. You will need to store the list of hotels available for booking somewhere, and as you add more features, you will need to save users information, the reviews they post for each hotel, but also the bookings each user makes. You can see that the data you need to handle can become very complicated, especially when you need to consider that data are not static, as they can be updated or deleted. To work more effectively with data, we can then use a database, which present the following benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A database defines a structure for your data and the relationships between entities"),Object(o.b)("li",{parentName:"ul"},"A database provides convenient and performant ways to safely store and retrieve data"),Object(o.b)("li",{parentName:"ul"},"A database provides a mechanism to check the validity of your data")),Object(o.b)("h3",{id:"different-types-of-database"},"Different types of database"),Object(o.b)("p",null,"There are many different kinds of database and different implementations. Sometimes, a database type is a better fit to certain use case or certain problems. The most well-known database types include relational database, key/value database, graph database and document database (also known as NoSQL). For this class, we will focus specifically on relational database as they are the most widely used and supported. You can consult ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://db-engines.com/en/ranking"}),"DB-Engines")," to see a ranking of the most used database, as you can see, there is a lot of them!"),Object(o.b)("h2",{id:"introduction-to-postgresql"},"Introduction to PostgreSQL"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},'"PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 30 years of active development on the core platform."')," (source: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/about/"}),"postgresql.org"),")"),Object(o.b)("h3",{id:"what-is-sql"},"What is SQL?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pronounced S-Q-L or sequel"),Object(o.b)("li",{parentName:"ul"},"Stands for Structured Query Language"),Object(o.b)("li",{parentName:"ul"},"SQL is the standard language used to communicate with relational database"),Object(o.b)("li",{parentName:"ul"},"SQL statements are used to query, create, update, delete records in a database"),Object(o.b)("li",{parentName:"ul"},"SQL statements are executed by a RDBMS.")),Object(o.b)("h3",{id:"what-is-a-rdbms"},"What is a RDBMS?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stands for Relational Database Management System"),Object(o.b)("li",{parentName:"ul"},"It is a program that processes SQL statements to manage a relational database"),Object(o.b)("li",{parentName:"ul"},"PostgreSQL is a RDBMS.")),Object(o.b)("h3",{id:"what-characterizes-a-relational-database"},"What characterizes a relational database?"),Object(o.b)("p",null,"As mentioned previously, a relational database is a specific type of database. Data is stored in ",Object(o.b)("em",{parentName:"p"},"tables")," of ",Object(o.b)("em",{parentName:"p"},"rows")," and ",Object(o.b)("em",{parentName:"p"},"columns")," as per the example below:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:a(276).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How about storing everything in one big table as shown below? Why isn't it a good idea?")),Object(o.b)("p",null,"A customer could have several bookings. If the customer changes their telephone number, you would have to update every single rows for this customer with their new number, which is more prone to errors. As a general rule, try to avoid duplication of data, and instead design your system in a way that you have a single source of truth for each piece of data. The example below is ",Object(o.b)("strong",{parentName:"p"},"NOT")," a good solution."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:a(277).default})),Object(o.b)("h3",{id:"database-modeling-exercise"},"Database modeling exercise"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Scenario:")," You've been hired to create a database for a new company which wants to revolutionize the hotel booking market. The first task you've been given is to model how the company would store its data in a database. Here are your requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The company wants to store in the database all the hotels available on their website"),Object(o.b)("li",{parentName:"ul"},"For each hotel, the company wants to record the name and the number of rooms. Also each hotel can have several room types and each room type has a specific price."),Object(o.b)("li",{parentName:"ul"},"The company also needs to store the information of customers who registered on their website with a name, an email and an address."),Object(o.b)("li",{parentName:"ul"},"Customers need to be able to record their bank details which consist of an account number and a sort code. Each customer can register several bank accounts if they want."),Object(o.b)("li",{parentName:"ul"},"Finally, as customers can book a room in an hotel starting on a specific date for a specific number of nights, the company wants to store the bookings.")),Object(o.b)("p",null,"With mentors help, model the database for this company. In particular, show the different entities, fields and relationships between each entity."),Object(o.b)("h3",{id:"check-your-postgresql-installation"},"Check your PostgreSQL installation"),Object(o.b)("p",null,"Open a terminal in your laptop and verify the command ",Object(o.b)("inlineCode",{parentName:"p"},"psql -V")," returns the version of PostgreSQL. In psql, you can type use the command ",Object(o.b)("inlineCode",{parentName:"p"},"help")," to show the help menu. Within the command prompt, you can enter SQL statements and run them against PostgreSQL. To quit psql, enter the command ",Object(o.b)("inlineCode",{parentName:"p"},"\\q"),"."),Object(o.b)("h2",{id:"communicating-with-the-database-using-sql"},"Communicating with the database using SQL"),Object(o.b)("p",null,"All commands in the following need to be entered in a psql command prompt. However, sometimes it's easier to write the code in a file and then load the file with psql. For example, if you write your SQL code in a file called ",Object(o.b)("inlineCode",{parentName:"p"},"test.sql"),", you can then execute it with ",Object(o.b)("inlineCode",{parentName:"p"},"psql -d DATABASE_NAME -f test.sql"),"."),Object(o.b)("h3",{id:"creating-a-new-database"},"Creating a new database"),Object(o.b)("p",null,"In a terminal, create a new database named ",Object(o.b)("inlineCode",{parentName:"p"},"cyf_hotels")," with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"createdb cyf_hotels\n")),Object(o.b)("p",null,"Then connect to your database with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"psql cyf_hotels\n")),Object(o.b)("h3",{id:"creating-a-table"},"Creating a table"),Object(o.b)("p",null,"Data are stored in tables. Let's first create a ",Object(o.b)("inlineCode",{parentName:"p"},"customers")," table to hold the details of customers."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE customers (\n  id        SERIAL PRIMARY KEY,\n  name      VARCHAR(30) NOT NULL,\n  email     VARCHAR(120) NOT NULL,\n  address   VARCHAR(120),\n  city      VARCHAR(30),\n  postcode  VARCHAR(12),\n  country   VARCHAR(20)\n);\n")),Object(o.b)("p",null,"Few things to mention from the SQL statement above:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SERIAL PRIMARY KEY")," defines the column ",Object(o.b)("inlineCode",{parentName:"li"},"id")," as a unique identifier for each row. Moreover, this identifier will automatically incremented every time data is inserted. ",Object(o.b)("inlineCode",{parentName:"li"},"id")," is called the primary key of the table ",Object(o.b)("inlineCode",{parentName:"li"},"customers"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"VARCHAR(20)")," defines the column to hold text data with a maximum length of 20 characters"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NOT NULL")," defines the column as not nullable, which means that you must set a value."),Object(o.b)("li",{parentName:"ul"},"Other useful types include ",Object(o.b)("inlineCode",{parentName:"li"},"INT"),", ",Object(o.b)("inlineCode",{parentName:"li"},"TEXT"),", ",Object(o.b)("inlineCode",{parentName:"li"},"BOOLEAN")," and ",Object(o.b)("inlineCode",{parentName:"li"},"DATE"),"."),Object(o.b)("li",{parentName:"ul"},"The database will reject any values which don't match the type.")),Object(o.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," table in the ",Object(o.b)("inlineCode",{parentName:"li"},"cyf_hotels")," database."),Object(o.b)("li",{parentName:"ul"},"Verify that the table ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," is created with the psql command ",Object(o.b)("inlineCode",{parentName:"li"},"\\dt")," which lists the existing tables."),Object(o.b)("li",{parentName:"ul"},"Display the table ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," definition with the command ",Object(o.b)("inlineCode",{parentName:"li"},"\\d customers")," and verify that it matches what you expect."),Object(o.b)("li",{parentName:"ul"},"Create a new table ",Object(o.b)("inlineCode",{parentName:"li"},"hotels")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"cyf_hotels")," database with the following columns: an ",Object(o.b)("inlineCode",{parentName:"li"},"id"),", a ",Object(o.b)("inlineCode",{parentName:"li"},"name"),", the number of ",Object(o.b)("inlineCode",{parentName:"li"},"rooms")," and the hotel ",Object(o.b)("inlineCode",{parentName:"li"},"postcode"),". Use the commands above to verify that the table is correctly created.")),Object(o.b)("p",null,"Now that we have a table to store ",Object(o.b)("inlineCode",{parentName:"p"},"customers")," and a table to store ",Object(o.b)("inlineCode",{parentName:"p"},"hotels"),", we can create a table to hold the bookings of customers for an hotel with the checkin date and the number of nights they intend to stay:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE bookings (\n  id               SERIAL PRIMARY KEY,\n  customer_id      INT REFERENCES customers(id),\n  hotel_id         INT REFERENCES hotels(id),\n  checkin_date     DATE NOT NULL,\n  nights           INT NOT NULL\n);\n")),Object(o.b)("p",null,"In the above, ",Object(o.b)("inlineCode",{parentName:"p"},"customer_id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hotel_id")," are called ",Object(o.b)("strong",{parentName:"p"},"foreign keys")," as they reference an id from a different table. This set a very strong constraint as you will not be able to create a booking for a customer id which does not exist in the customers table!"),Object(o.b)("h4",{id:"exercise-2"},"Exercise 2"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the table ",Object(o.b)("inlineCode",{parentName:"li"},"bookings")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"cyf_hotels")," database and verify that it is correctly created.")),Object(o.b)("h3",{id:"inserting-data"},"Inserting data"),Object(o.b)("p",null,"Once your ",Object(o.b)("inlineCode",{parentName:"p"},"customers"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hotels")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bookings")," table are created, you can insert data with the following SQL statements:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('John Smith','j.smith@johnsmith.org','11 New Road','Liverpool','L10 2AB','UK');\nINSERT INTO hotels (name, rooms, postcode) VALUES ('Triple Point Hotel', 10, 'CM194JS');\nINSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 1, '2019-10-01', 2);\n")),Object(o.b)("p",null,"The data you insert should be of the same type with your table definition. For example, the following insert statement will ",Object(o.b)("strong",{parentName:"p"},"fail"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 1, '2019-14-01', 2);\n")),Object(o.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the 3 SQL statements above."),Object(o.b)("li",{parentName:"ul"},"Insert yourself in the ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," table."),Object(o.b)("li",{parentName:"ul"},"Insert the following 3 hotels in the ",Object(o.b)("inlineCode",{parentName:"li"},"hotels")," table:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Triple Point Hotel")," has 10 rooms, its postcode is ",Object(o.b)("inlineCode",{parentName:"li"},"CM194JS")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Royal Cosmos Hotel")," has 5 rooms, its postcode is ",Object(o.b)("inlineCode",{parentName:"li"},"TR209AX")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Pacific Petal Motel")," has 15 rooms, its postcode is ",Object(o.b)("inlineCode",{parentName:"li"},"BN180TG")))),Object(o.b)("li",{parentName:"ul"},"Try to insert a booking for a customer id which does not exist in the ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," table (for example ID ",Object(o.b)("inlineCode",{parentName:"li"},"100"),"). What is happening and why?")),Object(o.b)("h3",{id:"retrieving-data"},"Retrieving data"),Object(o.b)("p",null,"Previously, you have inserted data in your tables. How do you make sure these data have been inserted correctly? The following SQL statement is used to request data from a specific table:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM customers;\n")),Object(o.b)("h4",{id:"exercise-4"},"Exercise 4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the above SQL statement to display all the data inserted in the ",Object(o.b)("inlineCode",{parentName:"li"},"customers")," table."),Object(o.b)("li",{parentName:"ul"},"Use the above SQL statement to display all the data inserted in the ",Object(o.b)("inlineCode",{parentName:"li"},"hotels")," table."),Object(o.b)("li",{parentName:"ul"},"Use the above SQL statement to display all the data inserted in the ",Object(o.b)("inlineCode",{parentName:"li"},"bookings")," table.")),Object(o.b)("h3",{id:"retrieving-data-with-conditions"},"Retrieving data with conditions"),Object(o.b)("p",null,"Actually, the ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," statement is very powerful and you will see you can request a lot of different things with it. Have you seen the ",Object(o.b)("inlineCode",{parentName:"p"},"*")," character in the SQL statement above? It means that you want to see the data for all the columns of the table. What if you want to only return specific columns? For example, to retrieve all customers ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"address")," from the table ",Object(o.b)("inlineCode",{parentName:"p"},"customers"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT name,address FROM customers;\n")),Object(o.b)("p",null,"Sometimes, you want to retrieve only data which verify a specific condition. In this case, you can use a ",Object(o.b)("inlineCode",{parentName:"p"},"WHERE")," clause. For example, to retrieve all hotels having more than 7 rooms:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM hotels WHERE rooms > 7;\n")),Object(o.b)("p",null,"To retrieve the customer name and address with id 1:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT name,address FROM customers WHERE id = 1;\n")),Object(o.b)("p",null,"To retrieve all the bookings starting after 2019/10/01:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM bookings WHERE checkin_date > '2019/10/01';\n")),Object(o.b)("p",null,"To retrieve all the bookings starting after 2019/10/01 for a minimum of 2 nights:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM bookings WHERE checkin_date > '2019/10/01' AND nights >= 2;\n")),Object(o.b)("p",null,"To retrieve all the hotels with the postcode ",Object(o.b)("inlineCode",{parentName:"p"},"CM194JS")," or ",Object(o.b)("inlineCode",{parentName:"p"},"TR209AX"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM hotels WHERE postcode = 'CM194JS' OR postcode = 'TR209AX';\n")),Object(o.b)("h4",{id:"exercise-5"},"Exercise 5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Execute the file ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./cyf_hotels_exercise5.sql"}),Object(o.b)("inlineCode",{parentName:"a"},"cyf_hotels_exercise5.sql"))," which will reset your existing tables and insert more data in the ",Object(o.b)("inlineCode",{parentName:"li"},"customers"),", ",Object(o.b)("inlineCode",{parentName:"li"},"hotels")," and ",Object(o.b)("inlineCode",{parentName:"li"},"bookings")," tables. (hint: in the terminal, use ",Object(o.b)("inlineCode",{parentName:"li"},"psql -d cyf_hotels -f cyf_hotels_exercise5.sql"),")."),Object(o.b)("li",{parentName:"ul"},"Retrieve all information for the customer Laurence Lebihan."),Object(o.b)("li",{parentName:"ul"},"Retrieve all customers name living in UK."),Object(o.b)("li",{parentName:"ul"},"Retrieve the address, city and postcode of Melinda Marsh."),Object(o.b)("li",{parentName:"ul"},"Retrieve all hotels located in the postcode DGQ127."),Object(o.b)("li",{parentName:"ul"},"Retrieve all hotels with more than 11 rooms."),Object(o.b)("li",{parentName:"ul"},"Retrieve all hotels with more than 6 rooms but less than 15 rooms."),Object(o.b)("li",{parentName:"ul"},"Retrieve all hotels with exactly 10 rooms or 20 rooms."),Object(o.b)("li",{parentName:"ul"},"Retrieve all bookings for customer id 1."),Object(o.b)("li",{parentName:"ul"},"Retrieve all bookings for more than 4 nights."),Object(o.b)("li",{parentName:"ul"},"Retrieve all bookings starting in 2020."),Object(o.b)("li",{parentName:"ul"},"Retrieve all bookings before 2020 for less than 4 nights.")),Object(o.b)("h2",{id:"homework"},"Homework"),Object(o.b)("p",null,"All of the homework can be found in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/Databases-Homework"}),"this repository"),"."),Object(o.b)("h3",{id:"submission"},"Submission"),Object(o.b)("p",null,"Fork and clone the repository above to get the homework for this week."),Object(o.b)("p",null,"Create a new branch from ",Object(o.b)("inlineCode",{parentName:"p"},"Master")," to start working on this weeks homework. It should be called ",Object(o.b)("inlineCode",{parentName:"p"},"[YOUR_NAME]/Week1"),"."),Object(o.b)("p",null,"When you have completed the homework create a pull request back to the ",Object(o.b)("inlineCode",{parentName:"p"},"CodeYourFuture/Databases-Homework")," repository so your teach can feedback on it."),Object(o.b)("h3",{id:"tasks"},"Tasks"),Object(o.b)("p",null,"You should complete all of the tasks in ",Object(o.b)("strong",{parentName:"p"},"Week 1")," of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/Databases-Homework"}),"Database Homework repository"),"."))}c.isMDXComponent=!0}}]);