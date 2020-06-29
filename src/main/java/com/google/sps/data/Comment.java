package com.google.sps.data;

/** An item on a todo list. */
public final class Comment {

  private final String imgPath;
  private final String name;
  private final String email;
  private final String comment;
  private final long timestamp;

  public Comment(String imgPath, String name, String email, String comment, long timestamp) {
    this.imgPath = imgPath;
    this.name = name;
    this.email = email;
    this.comment = comment;
    this.timestamp = timestamp;
  }
}