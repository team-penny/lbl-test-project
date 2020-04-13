# LBL-Test-Project


The *LBL-Test-Project* is a state of the art web application, thought up by the brightest minds at the Lawrence Berkeley National Laboratory.  The sole REST API endpoint, served from a Node.js Express server, returns an array of given *Project* objects.  The Angular 9 web app retrieves/displays the list of Projects, and then provides the user with the opportunity to *view* the data... genius!

## Running Environment

* Node.js 12.6
* @Angular/cli 9.1.1


## Installing Dependencies

Run `npm install` in each of the folders `./lbl-project-angular` and `./lbl-project-express`

## The Backend Node.js Server

The backend of the *LBL-Test-Project*, found in `./lbl-project-express`, is a Node.js server running the Express web application framework.

The single API endpoint, defined at `./lbl-project-express/src/router.ts`, is supposed to be returning the array of *Projects* defined in the file `lbl-project-express/src/data-source/projects.json`, but it's not working! The route handler for the API endpoint will need to be set up to properly serve the objects defined in that file.

### How to Run

```
$ cd lbl-project-express
$ npm start
```

## Angular 9

The frontend of the *LBL-Test-Project*, found in `./lbl-project-angular`, uses the latest version 9 of the Angular web framework.

There's currently a home page, but nothing happens when I click the `Look at some projects` button!  That's going to need to be fixed, which in its working state should:

1. Take the user to the ProjectList component, where the list of the *Project* objects retrieved from a GET request to `api/project` should be displayed.
2. The ProjectList component lists of all of the *Project* objects available for viewing.  It should also have a way of selecting a *Project* to be viewed in the ProjectView component.
3. The ProjectView component displays all of the information for a *Project*.  In addition to the individual data values, totals of the data values should be calculated and displayed (details on how to calculate totals are described below).  It should also provide a way of going back to the ProjectList component.

### How to Run

```
$ cd lbl-project-angular
$ npm start
```

## The Data

The main data object is the *Project*, which comes in 3 types: A, B and C.

The data served from the REST API is located at `./lbl-project-express/src/data-source/projects.json`.

All of the Projects have similar root attributes: id, name and project-type; but differ in the structure of their *data* objects.

```
{
    id: number;
    name: string;
    project-type: string;
    data: [];
}
```

### Types of Projects

#### A

Projects with a project-type A have data objects with a single `value` key.  The total for this type of project is a single value, calculated from the sum of the data object values.


```
{
    value: number;
}
```

#### B

Projects with a project-type B have data objects with a `value` key and an additional `rate` key.  The total for this type of project is a single value, calculated by summing the products of the individual `value` and `rate` values.


```
{
    value: number;
    rate: number;
}
```

#### C

Projects with a project-type C have data objects with a `value` key, a `rate` key, and a `group` key.  The totals for this type of project consist of subtotals for each `group`, along with a final grand total.

```
{
    value: number;
    rate: number;
    group: string;
}
```

## Summary/Additional Notes

To summarize, your tasks are as follows:

1. Fix the backend API to serve the Project data in the `projects.json` file.
2. Modify the Angular 9 project to display the Project data.
3. Zip and email modified repository to `mspears@lbl.gov`

Note: please do not spend a lot of time formatting the HTML to look pretty!  A very simple display of the information will suffice.
