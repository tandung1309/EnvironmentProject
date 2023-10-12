import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleHeader from '../Component/SimpleHeader';

const BlogsPage = () => {
  // Sample data for blogs
  const blogs = [
    {
      user: 'Nguyễn Dũng',
      avatar: require('../../../img/userAvatar.png'),
      date: 'August 15, 2023',
      content:
        'I want to resell some old clothes for recycling',
      image: require('../../../img/blogs/post1.jpg'),
      // comments: [
      //   'Absolutely! Recycling helps us protect the environment and lessen our impact on natural resources.',
      //   'I agree. It\'s important for everyone to do their part and recycle responsibly.',
      // ],
      likes: 12,
      shares: 5,
    },
    {
      user: 'Phong Tran',
      avatar: require('../../../img/userAvatar.png'),
      date: 'September 2, 2023',
      content:
        'I just moved and need to sell some cardboard boxes',
      image: require('../../../img/blogs/post2.png'),
      // comments: [
      //   'That’s amazing! It\'s incredible how small actions can have a big impact.',
      //   'I had no idea! Thanks for sharing this valuable information.',
      // ],
      likes: 20,
      shares: 8,
    },
    // Add more blogs with user info, content, and interactions
  ];

  return (
    <><SimpleHeader title='Blogs' /><View style={styles.container}>
      <Text style={styles.title}>Recycling Blogs</Text>
      <ScrollView contentContainerStyle={styles.blogList}>
        {blogs.map((blog, index) => (
          <View key={index} style={styles.blogContainer}>
            <View style={styles.userContainer}>
              <Image source={blog.avatar} style={styles.avatar} />
              <Text style={styles.username}>{blog.user}</Text>
            </View>
            <Text style={styles.blogDate}>{blog.date}</Text>
            <Text style={styles.blogContent}>{blog.content}</Text>
            <Image source={blog.image} style={styles.blogImage} />
            {/* {blog.comments.map((comment, commentIndex) => (
              <Text key={commentIndex} style={styles.comment}>
                {comment}
              </Text>
            ))} */}
            <View style={styles.interactionsContainer}>
              <TouchableOpacity style={styles.interactionButton}>
                <Text style={styles.interactionText}>{blog.likes} Likes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.interactionButton}>
                <Text style={styles.interactionText}>{blog.shares} Shares</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#04364A',
  },
  blogList: {
    paddingBottom: 20,
  },
  blogContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#5C8D89',
    borderWidth: 1,
    padding: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    color: 'black',
  },
  blogDate: {
    fontSize: 16,
    color: '#04364A',
    marginBottom: 5,
  },
  blogContent: {
    fontSize: 16,
    marginBottom: 10,
    color: '#04364A',
  },
  blogImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  comment: {
    fontSize: 14,
    color: '#04364A',
    marginBottom: 5,
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#5C8D89',
    paddingTop: 10,
  },
  interactionButton: {
    flex: 1,
    alignItems: 'center',
  },
  interactionText: {
    fontSize: 14,
    color: '#04364A',
  },
});

export default BlogsPage;
