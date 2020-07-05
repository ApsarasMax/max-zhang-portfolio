package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for filtered articles. */
@WebServlet("/filter-articles")
public class FilterArticlesServlet extends HttpServlet {
    List<Integer> prefaceArticlesList =new ArrayList<Integer>(Arrays.asList(0));
    List<Integer> birthdayArticlesList =new ArrayList<Integer>(Arrays.asList(8, 15));
    List<Integer> learningsArticlesList =new ArrayList<Integer>(Arrays.asList(1, 3, 5, 7, 11, 16, 17, 18));
    List<Integer> essaysArticlesList =new ArrayList<Integer>(Arrays.asList(10, 12, 13, 14, 19));
    List<Integer> aboutArticlesList =new ArrayList<Integer>(Arrays.asList(999));

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String filter = request.getParameter("filter");

    List<Integer> articlesList = new ArrayList<>();
    switch(filter){
        case "Preface": 
            articlesList=prefaceArticlesList;
            break;
        case "Birthday": 
            articlesList=birthdayArticlesList;
            break;
        case "Learnings": 
            articlesList=learningsArticlesList;
            break;
        case "Essays": 
            articlesList=essaysArticlesList;
            break;
        case "About": 
            articlesList=aboutArticlesList;
            break;
        default:
            break;
    }


    // Query query = new Query("Comment").addSort("timestamp", SortDirection.DESCENDING).setFilter(new Query.FilterPredicate("imgPath", Query.FilterOperator.EQUAL, imgPath));          

    // DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    // PreparedQuery results = datastore.prepare(query);

    // List<Comment> comments = new ArrayList<>();
    // for (Entity entity : results.asIterable()) {
    //   long id = entity.getKey().getId();
    //   String name = (String) entity.getProperty("name");
    //   String email = (String) entity.getProperty("email");
    //   String commentString = (String) entity.getProperty("comment");
    //   long timestamp = (long) entity.getProperty("timestamp");

    //   Comment comment = new Comment(imgPath, name, email, commentString, timestamp);
    //   comments.add(comment);
    // }

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(articlesList));
  }
}