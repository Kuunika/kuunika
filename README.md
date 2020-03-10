# Kuunika - Mono Repo

This repo hosts a number of Kuunika projects and was generated using [Nx](https://nx.dev/) to help manage the mono repo architecture. 



## Table of Contents

- Terminology Service Dashboard
- Further Help



# Terminology Service Dashboard

## Dependencies

- [NodeJS > v10.15.0](https://nodejs.org/en/download/)
- [Redis > 5.0.7](https://redis.io/download)



## Setup

This project uses NestJs for its api backend and ReactJs for front end. Click the following link to thier respective documentation for more information on [NestJs](https://docs.nestjs.com/) and [ReactJS](https://reactjs.org/docs/getting-started.html) .

This installation guide assumes that you have read and setup Open Concept Lab according to the guide provided in the Kuunika Repos [Wiki](https://github.com/Kuunika/kuunika/wiki/Terminology-Service-Dashboard---Configuring-Open-Concept-Lab).



## Installation

#### Step 1: Clone Repo

Clone this repository into your local directory, Use the command below:

```bash
# Clone project to a computer
git clone https://github.com/Kuunika/kuunika

# Navigate to the project root directory
cd kuunika
```

#### Step 2: Install Dependencies

In the root directory of the project run the following command

```bash
# install all dependancies
npm install
```

#### Step 3: Run Tests

```shell
# install all dependancies
npm run test
```

#### Step 4: Edit Env File

In the root directory there exist a file named *'.env.example'* create a copy of this file, rename the copy to *'.env'* and open it to edit the contents.

```bash
# API key used to make request to the OCL API Service
OCL_API_KEY='*'

OCL_API='*' #Base URL Of OCL or URL of internally hosted instance of OCL, ex https://api.openconceptlab.org/

OCL_CATEGORIES_API_URL='*' #URL of Source containing categories data that the api will route requests, ex: orgs/:OrgName/sources/:SampleSourceName/

REDIS_HOST=* #Address of Redis instance host

REDIS_PORT='6379' #Port used to access redis. Default port 6379
```

#### Step 5: Populate Redis With Data From OCL

```shell
# Command for populating Redis with OCL Data
npm run terminology-redis
```

#### Step 6: Start Backend

In the root directory of the project run the following command and the api will be running on port 3333

```shell
# Command for starting the backend api
npm run terminology-api
```

#### Step 7: Start Frontend

In the root directory of the project run the following command and the frontend will be running on port 4200

```shell
# Command for starting the frontend 
npm run terminology-client
```



# Further Help

### Addictional Information

Additional information can be found on project's [Wiki](https://github.com/Kuunika/kuunika/wiki) 

### Reporting Issues

If you have noticed a bug, you can open an issue on our [Github](https://github.com/Kuunika/kuunika/issues) Repo Page and attempt to fix.