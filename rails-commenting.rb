# ASSESSMENT 6: Rails Commenting Challenge


# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags




# FILE: app/controller/blog_posts_controller.rb


# ---1) The purpose of line 10 is to represent the controller class called BlogPostsController, the controller is in charge of holding the logic necessary while accessing the http verbs as well as performing this logic to display onto the user interface.
class BlogPostsController < ApplicationController
  def index
    # ---2) The purpose of line 13 is, it is creating an instance variable in order to return a list of all the instances that we created in the blogposts controller. Once this variable is called on then we will have access to the list of all the blogposts.
    @posts = BlogPost.all
  end
 
 
  # ---3) The purpose of line 17 is, it is creating the show method to show a singular blogpost from the database. This blogpost is decided on which id is being called on.
  def show
    @post = BlogPost.find(params[:id])
  end
 
 
  # ---4) The purpose of line 22 is, is creating the method to display a new form for the the users to interact with. This form is chosen when creating the view for this method. Typically this form will allow the user to add a new blogpost that they are interested in, including all of the key pairs that are necessary to creating an instance.
  def new
    @post = BlogPost.new
  end
 
 
  def create
    # ---5) The purpose of line 28 is, it is to create a new instance variable and post the new blogpost the user just created in the form while calling on the strong params once called on. The strong params will verify that the data entered is valid and meets the necessary criteria created meeting the instance will need a title and content that has not been used previously in another post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
 
 
  def edit
    # ---6) The purpose of line 36 is, it is creating an instance variable and having it equal to showing a singular blogpost from the database using the objects id in the created instances. Now once it is called on it allows the user to modify the content this is created to the user's preference.
    @post = BlogPost.find(params[:id])
  end
 
 
  def update
    @post = BlogPost.find(params[:id])
    # ---7) The purpose of line 42 is, calling on the instance variable that was created on line 40 in the update method and post the modifications the user just edited on the url as long as it meets the requirements of the strong params. This means in order for the singular blogpost to update it needs a title as well as content that has not been used in a prior blogpost.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
 
 
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The purpose of line 52 is, once the blogpost is deleted instead of the url staying on this page that was just destroyed it reroutes the user back to blogposts main page by using the alias (blog_posts_path) in order to access all of the blogposts that have been created.
      redirect_to blog_posts_path
    end
  end
 
 
  # ---9) The purpose of line 57 is to set the strong parameters(parameters). This is used to set security of the data entered below and give it its protection from just any content being created, accessed and destroyed.
  private
  def blog_post_params
    # ---10) The purpose of line 59 is, giving the url protection from any post that is created by the user. The new instances can only be accessed if it has a title as well as content; if not then the app will not allow the post to be processed.
    params.require(:blog_post).permit(:title, :content)
  end
 end
 
 
 