// // Copyright 2019 Google LLC
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //     https://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

// package com.google.sps.servlets;

// import com.google.gson.Gson;
// import java.io.IOException;
// import java.util.ArrayList;
// import java.util.List;
// import javax.servlet.annotation.WebServlet;
// import javax.servlet.http.HttpServlet;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;

// @WebServlet("/my-data-url")
// public class DataServlet extends HttpServlet {

//   @Override
//   public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
//     System.out.println("DataServlet doPost");
    
//     String name = request.getParameter("name-input");
//     String email = request.getParameter("email-input");
//     String comment = request.getParameter("comment-input");

//     response.setContentType("text/html;");
//     response.getWriter().println("<p>Name: " + name + "</p>");
//     response.getWriter().println("<p>Comment: " + comment + "</p>");
//   }

//   @Override
//   public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//     System.out.println("DataServlet doGet");
    
    
//     List<Integer> tasks = new ArrayList<>();
//     tasks.add(123);
//     tasks.add(456);

//     Gson gson = new Gson();

//     response.setContentType("application/json;");
//     response.getWriter().println(gson.toJson(tasks));
//   }
// }
