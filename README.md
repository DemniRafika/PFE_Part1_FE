# PFE_Project

# SpringBootServer

# Tools and technologies used
- Spring Boot - 4.0.0 Version
- Spring Framework - 2.0.5.RELEASE
- JDK - 1.8 or later
- Maven - 3.6.3
- IDE - STS/Eclipse IDE for Java Developers - 2020-03
- DOWNLOAD OTP 23.0 : https://www.erlang.org/downloads
- Install RabbitMQ Server : https://www.rabbitmq.com/install-windows.html

# Development Steps

1. Create a Spring Boot Application
2. The pom.xml File - Define Maven Dependencies
3. Project Structure
4. Configuring RabbitMQ : Create TradeMessageSender ( @Service ) class for sending messages
5. Creating the Trade Model
6. Creating the APIs - TradeController
7. Exception handling in RESTFul web services
8. Running Spring boot application
9. Test REST APIs Using Postman Client

# 1. Create a Spring Boot Application

>> Create Spring Boot Project With Spring Initializer
>> Create Spring Boot Project in Spring Tool Suite [STS]

# 2. The pom.xml File - Define Maven Dependencies

Let's define all the spring boot starter maven dependencies required to build this application in below pom.xml file:

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>net.springboot</groupId>
	<artifactId>CME</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>CME</name>
	<description>Spring Boot Project</description>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.5.RELEASE</version>
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-amqp</artifactId>
		</dependency>

		<dependency>
			<groupId>com.sun.xml.bind</groupId>
			<artifactId>jaxb-core</artifactId>
			<version>2.2.8-b01</version>
		</dependency>
		<dependency>
			<groupId>com.sun.xml.bind</groupId>
			<artifactId>jaxb-impl</artifactId>
			<version>2.2-promoted-b65</version>
		</dependency>

		<dependency>
			<groupId>com.sun.jersey</groupId>
			<artifactId>jersey-server</artifactId>
			<version>1.17</version>
		</dependency>
		<dependency>
			<groupId>com.sun.jersey</groupId>
			<artifactId>jersey-servlet</artifactId>
			<version>1.17</version>
		</dependency>

	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>

# 3. Project Structure
https://github.com/DemniRafika/PFE_Project/blob/master/structure.PNG
# 4. Configuring RabbitMQ

# RABBITMQ 
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest

# Angular9SpringbootClient

This project was generated with [Angular CLI](https://github.com/DemniRafika/PFE_Project) version  9.1.4

# Environement Installation 
'npm i'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/DemniRafika/PFE_Project/README.md).
