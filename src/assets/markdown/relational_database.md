# Relational Database Design

Hello 👋

In this blog post, I will introduce you all things about relational database design. The relational database is the most widely used type of database. It is likely you are using a relational database when you purchase things online or at local store.

## What Is A Database?

What is a database? As you probably know, a database is an organized collection of data used for the purpose of modeling some type of organization or organizational process. It really doesn't matter whether you're using spreadsheets or a database application program on the computer to collect and store the data. As long as you're gathering data in some organized manner for a specific purpose, you've got a database.

There are two types of database in database management. _Operational databases_ and _Analytical databases_.

Operational databases are the backbone of many companies, organizations, and institutions throughout the world. This type of database is primarily used in online transaction processing scenarios. The type of data stored in operational databases is _dynamic_, meaning that it changes constantly and always reflect _up-to-the-minute_ information.

In contrast, analytical databases are primarily used in _online analytical processing_ scenarios, where a need exists to store and track historical and time-dependent data. An analytical database is a valuable asset when the need exists to track trends, view statistical data over a long period of time, and make tactical or strategic business projections. This type of database stores _static data_, meaning that data will never change. Chemical labs, geological companies, and marketing-analysis firms are examples of organizations that use analytical databases.

## The Relational Database

The relational database was invented in 1969 and is still one of the most widely used database models in database management today. The father of relational database is _Dr. Edgar F. Codd_. He was an IBM research scientist in the late 1960s and was at that time looking for new ways to handle large amount of data. Being a mathematical by profession, he strongly believed that he could apply specific branches of mathematics to solve problems such as data redundancy, weak data integrity, and a database structure's over-dependence on its physical implementation.

Dr. Codd formally presented his new relational model in a landmark work entitled "A Relational Model of Data for Large Shared Data Banks" in June of 1970. He based his new model on two branches of mathematics - _set theory_ and _first-order predicate logic_. Indeed, the name of the model itself is derived from the term _relation_, which is part of set theory.

A relational database stores data in _relations_, which the user perceives as tables. Each relation is composed of _tuples_, or records, and _attributes_ or fields. The physical order of the records or fields in a table is completely immaterial, and each record in the table is identified by a field that contains a unique value. These are the two characteristics of a relational database that allow the data to exists independently of the way it is physically stored in the computer. As such, a user isn't required the physical location of a record in order to retrieve its data.

The relational database categorizes relationships as _one to one_, _one to many_, and _many to many_. These relationships will be covered in detail later. A relationship between a pair of tables is established implicitly through matching values of a shared field.

A _relational database management system (RDBMS)_ is a software program you use to create, maintain, modify, and manipulate a relational database. Many RDBMS programs also provide the tool you need to create a wide variety of end-user applications that interact with the data stored in the database. Of course, the quality of an RDBMS is a direct function of the extent to which it supports the relational database model. Examples of an RDBMS include PostgreSQL, MySQL and SQLite.

## Terminology
