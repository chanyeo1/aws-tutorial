## Install JDK
```
$ sudo apt update && /
sudo apt install openjdk-17-jdk -y
```

## Pull Source code
```
$ git clone https://github.com/chanyeo1/aws-tutorial.git
```

## Build Project
```
$ cd aws-tutorial/aws-deploy-be
$ ./mvnw clean install
```

## Create src/main/resources/application.properties
```
spring.application.name=aws-deploy-be
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=myuser
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true
```
