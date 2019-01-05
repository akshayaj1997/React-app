package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class HelloWorldController extends Controller {

    public Result helloWorld() {
        return internalServerError("Hello World!- Not Found");
    }

    public Result helloAkshaya() {
        return ok("Hello Akshaya!!");
    }

    public Result hello(String name) {
        return ok("Hello " + name + " !!!");
    }//Passing parameters as

    public Result hellos(String name, Integer count) {

        final StringBuffer sb = new StringBuffer();

        final String message = "Hello " + name + "\n";
        if (null == count)
            return internalServerError("There is an error");
        else {
            for (int i = 0; i < count; i++) {
                sb.append(message);

            }
        }
        return ok(sb.toString());
    }

    public Result greetings() {
        final JsonNode json = request().body().asJson();
        final String firstName = json.get("firstName").asText();
        final String lastName = json.get("lastName").asText();

        final Person person = Json.fromJson(json, Person.class);
        final String message = " Hello " + person.getFirstName() + " " + person.getLastName() + " !!!!";

        return ok(message);
    }


    public Result me() {

        Person person = new Person();
        person.setFirstName("Akshaya");
        person.setLastName("Jonnalagadda");

        final JsonNode json = Json.toJson(person);
        return ok(json);

    }

    //This class is generally declared in yet another class rather than as an inner class

    static class Person {
        private String firstName;
        private String lastName; // "private" to force the hand of getters and setters

        public Person() {
            // absolutely need to add default constructor or errors will arise.
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }
    }


}
