# Database Systems

Hello 👋

In this blog post, I will introduce you all things about relational database design. The relational database is the most widely used type of database. It is likely you are using a relational database when you purchase things online or at a local store.

## What Is A Database?

What is a database? As you probably know, a database is an organized collection of data used for the purpose of modeling some type of organization or organizational process. It really doesn't matter whether you're using spreadsheets or a database application program on the computer to collect and store the data. As long as you're gathering data in some organized manner for a specific purpose, you've got a database.

There are two types of database in database management. _Operational databases_ and _Analytical databases_.

Operational databases are the backbone of many companies, organizations, and institutions throughout the world. This type of database is primarily used in online transaction processing scenarios. The type of data stored in operational databases is _dynamic_, meaning that it changes constantly and always reflect _up-to-the-minute_ information.

In contrast, analytical databases are primarily used in _online analytical processing_ scenarios, where a need exists to store and track historical and time-dependent data. An analytical database is a valuable asset when the need exists to track trends, view statistical data over a long period of time, and make tactical or strategic business projections. This type of database stores _static data_, meaning that data will never change. Chemical labs, geological companies, and marketing-analysis firms are examples of organizations that use analytical databases.

## The Relational Database

The relational database was invented in 1969 and is still one of the most widely used database models in database management today. The father of relational database is _Dr. Edgar F. Codd_. He was an IBM research scientist in the late 1960s and was at that time looking for new ways to handle large amount of data. Being a mathematical by profession, he strongly believed that he could apply specific branches of mathematics to solve problems such as data redundancy, weak data integrity, and a database structure's over-dependence on its physical implementation.

Dr. Codd formally presented his new relational model in a landmark work entitled "A Relational Model of Data for Large Shared Data Banks" in June 1970. He based his new model on two branches of mathematics - _set theory_ and _first-order predicate logic_. Indeed, the name of the model itself is derived from the term _relation_, which is part of set theory.

A relational database stores data in _relations_, which the user perceives as tables. Each relation is composed of _tuples_, or records, and _attributes_ or fields. The physical order of the records or fields in a table is completely immaterial, and each record in the table is identified by a field that contains a unique value. These are the two characteristics of a relational database that allow the data to exist independently of the way it is physically stored in the computer. As such, a user isn't required of the physical location of a record in order to retrieve its data.

The relational database categorizes relationships as _one to one_, _one to many_, and _many to many_. These relationships will be covered in detail later. A relationship between a pair of tables is established implicitly through matching values of a shared field.

A _relational database management system (RDBMS)_ is a software program you use to create, maintain, modify, and manipulate a relational database. Many RDBMS programs also provide the tool you need to create a wide variety of end-user applications that interact with the data stored in the database. Of course, the quality of an RDBMS is a direct function of the extent to which it supports the relational database model. Examples of an RDBMS include PostgreSQL, MySQL, and SQLite.

## Terminology

These terms below are very important, you must understand them before learning the design process.

There are four categories of terms used in relational database: _value-related_, _relationship-related_, _structure-related_ and _integrity-related_.

### Value-Related Terms

**Data**

The values you store in database are _data_. Data is _static_, it remains the same state until you modify it. Data consists of raw facts. The word _raw_ indicates that the facts haven't yet been processed to reveal their meaning.

**Information**

_Information_ is the result of processing raw data to reveal its meaning. It is _dynamic_ because its content will change constantly based on the data stored in the database. You can show information as the result of the SQL SELECT statement, display it in a form on your computer screen, or print it as a report. The point to remember is that _you must process your data in some manner so that you can turn it into meaningful information_.

`Data is what you store. Information is what you retrieve.`

**Null**

_Null_ is a condition that represents a missing or unknown value. You must understand that Null _does not represent_ a zero or an empty text strings. The reasons are quite simple.

- The zero can have a wide variety of meanings. It can represent the state of an account balance, the current items quantity in a store, and more.
- The text strings with one or more spaces may meaningless to most of us. However, it's definitely meaningful to a query language like SQL.
- The empty strings is also an acceptable value to languages such as SQL and can be meaningful under certain circumstances.

**The value of Null**

Null is quite useful when you use it for its stated purpose. To use Nulls correctly, you must first understand why they occur at all.

_Missing values_ are commonly the result of human error. Imagine you're a receptionist adding a client to a database. If you forget to ask for the client's country name, that data will be considered missing and represented as Null. Once you recognize the error, you can contact the client to obtain the missing information.

_Unknown values_ appear in the database for variety of reasons. One reason may be that a specific value you need for a field is as yet undefined. Consider old example again, but in this case the client doesn't remember the country name, then the data is _unknown_ and represented in database as a Null.

It's important to know the differences between "does not apply" and "is not applicable". Now assume you're working with a PATIENTS table that contains a field called HAIR-COLOR, and you're currently updating a record for an existing male patient. If that patient recently became bald, then the value for that field is definitely "not applicable." Although you could just use Null to represent a value that is not applicable, I always recommend that you use a true value such as "N/A" or "Not Applicable." This will make the information clearer in the long run.

**The problem with Null**

The major disadvantage of Null is that it has an adverse effect on mathematical operations. An operation involving a Null evaluates to Null. This is logically reasonable if a number is unknown, then the result of the operation is necessarily unknown. For example, 1 + Null = Null.

The issues of missing values, unknown values, and whether a value will be used in a mathematical expression or aggregate function are all taken into consideration in the database design process, and we will revisit and discuss these issues further.

### Structure-Related Terms

**Table**

Data stored in relational database is _relation_, which are perceived by the user as _tables_. Each relation is composed of _tuples (records)_ and _attributes (fields)_.

Tables are the chief structures in the database and each table always represents a single, specific subject. The logical order of records and fields within a table is of absolutely no importance, and every table contains at least one field known as a primary key that uniquely identifies each of its records.

**Field**

A _field_ (also known as _attribute_) represents a characteristic of the subject of the table which it belongs. Fields are the structures that actually store data. The data in these fields can be retrieved and represented as information in almost any configuration that you can imagine.

Every field in a _properly designed_ database contains one and only one value, and its name will identify the type of value it holds. This makes entering data into a field very intuitive. If you see fields with names such as FIRST-NAME, LAST-NAME, CITY, STATE, and ZIPCODE, you know exactly what type of values go into each field. You'll find it very easy to sort data by last name.

You’ll typically encounter three other types of fields in an improperly or poorly designed database.

1. A _multipart_ field (also known as a _composite_ field), which contains two or more distinct items within its value.
2. A _multivalued_ field, which contains multiple instances of the same type of value.
3. A _calculated_ field (also known as a _derived_ field), which contains a concatenated text value or the result of a mathematical expression.

**Record**

A _record_ (or _tuple_) represents a unique instance of the subject of a table. It is composed of the entire set of fields in a table, regardless of whether the fields contain values. Because of the manner in which a table is defined, each record is identified throughout the database by a unique value in the primary key field of that record. Records are a key factor in understanding table relationships because you’ll need to know how a record in one table relates to other records in another table.

**View**

A _view_ is a "virtual" table composed of fields from one or more tables in the database. The tables that comprise the view are known as _base tables_. The relational model refers to a view as being "virtual" because it draws data from base tables rather than storing data on its own. In fact, the only information about a view that is stored in the database is its structure. Many major RDBMS programs support views and typically refer to them as _saved queries_.

Views enable you to see the information in your database from many different aspects, providing you with a great amount of flexibility when you work with your data. You can create views in a variety of ways, and they are especially useful when you base them on multiple related tables.

This is an important part, so I will talk about views in a dedicated section.

> [!NOTE]
> Although every major database vendor supports the type of view I've described in this section, several vendors support what is known as an _indexed_ view.

**Keys**

Keys are special fields that play very specific roles within a table, and the type of key determines its purpose within the table. There are several types of keys a table may contain, but the two most significant ones are the _primary key_ and the _foreign key_.

A primary key is a field or a group of fields that uniquely identifies each record within a table. A primary key composed of two or more fields is known as a _composite_ primary key. The primary key is absolutely the most important key in the table.

- A primary key **value** identifies a _specific record_ throughout the entire database.
- The primary key **field** identifies a _given table_ throughout the entire database.
- The primary key enforces table-level integrity and helps establish relationships with other tables in the database.

Every table in your database should have a primary key!

When you determine that two tables bear a relationship to each other, you typically the relationship by taking a copy of the primary key from the first table and incorporating it into the structure of the second table, where it becomes a _foreign key_.

Besides helping to establish relationships between pairs of tables, foreign keys also help implement and ensure relationship-level integrity. This means that the records in both tables will always be properly related because the values of a foreign key must match existing values of the primary key to which it refers. Relationship-level integrity also helps you avoid the dreaded "orphaned" record, a classic example of which is an order record without an associated customer. If you don't know who made the order, you can't process it, and you obviously can't invoice it. That'll throw your quarterly sales off!
