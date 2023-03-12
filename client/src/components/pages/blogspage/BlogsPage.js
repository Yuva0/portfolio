import BlogSet from '../../blogset/BlogSet';
import classes from './css/BlogsPage.module.css';

const BlogsPage = (props) => {
  return (
    <div className={classes.blogspage}>
        <BlogSet title="All Blogs" time="latest" type="blogs"/>
    </div>
  );
};

export default BlogsPage;