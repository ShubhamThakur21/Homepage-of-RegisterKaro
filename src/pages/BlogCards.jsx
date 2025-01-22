/* eslint-disable react/prop-types */

const blogs = [
  {
    id: 1,
    author: 'Prabhesh Mishra',
    date: '1 Jan 2023',
    tag: 'Today',
    title: 'Small business & Startup',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    categories: ['Tax & Audit', 'Management'],
    image: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGhDAqlFHdNx9OTYmn~YuEo2N9Yj4oYG9sHeds3fLvWEfE1f7sroZqxjZHoKuK1gxuapiL6~fplM52dxtC7pFHuvrCH~7jL-1bEdu6PLsWvnjwnof32T9Y0nPIOM2dK0zQdyFGbVy9XqVvGq47IOYNUdH0USHpMALKwnaX-7rvjf2VwEwY~cIdN4gvjKPCcqFdr1ZOkZW09jcLBkl4RY336qYol-RhYs~RhZt3GmZGcVanQegCurtU8Mur~~RHu-wmbIhdqWah4znLTmyPyErutelIy8~S5745qypbyLyUwJ~DnQBDqHYvynaClXn64stLr-ddq05UV8QR~XL4gVsg__', 
  },
  {
    id: 2,
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    categories: ['Tax', 'Research', 'Compliance'],
    image: 'https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxqNKgRpXToYRoSbTEl2-A33v1Ov9uViNMsW-6Zvl7IH9qSwJGgMjMgvU6e4H166BGIZZQALi7f3auqY-TYLbtqcXa7s6l7wGkBlcqqmp6wpe2yJEXCORgXmDnWEqPJxqCeRHM74n3cSlC10JCksgTgoIc6zGzdaWOH7fM5F72F1okxSAaI7bi4jqTr-k6ypToz3TiEq4qhqbNdYzmZy~GIxz0vigbe0pMXywowCAELH3GTwPXcDyNVQkUN7YYXH4yjRRvP7H5D3DD98SRbH4S2DYwMa7-IO8PqyMzp2LrZFucEjys-MDHVJfKq73zG-kUMf7MRJF~NnZYrG7A97lA__',
  },
  {
    id: 3,
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    title: 'Growing Business Package',
    description: 'Introduction to Wireframing and Its Principles. Learn from the best in the Industry.',
    categories: ['Audit', 'Money Back'],
    image: 'https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1737468117~exp=1737471717~hmac=5c2d0cb1e03aed3d6e8725ce55ff438d8dda03d7c00fe16f3058b8c2051feea2&w=996',
  },
  {
    id: 4,
    author: 'Karan Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Collaboration can make our teams stronger, and our Individual designs better.',
    categories: ['Money', 'Management'],
    image: 'https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nm74i-cGyYu8ZaFU99f1kc75I5b0XjDB7AnhlytnGLRAyAi25hJ4Z2Ok0Vm2z~u-l1N942l3xbda3TdOJJYQrQFNo5dNA0JvwJHM2AoOVgFTskRhPVn6zpZQMsOKByKvdECXfiv58gFJHLgjtgE5k~f77fJmX2p7CDdC4GhaSo0vOqTa9FktE8xqdkqo7LyvcOtAeeR-mhOi2LUwef0Ax-acxGujB7w4UBLpOAZ8wsvYTzd8FvFj5FuioXJ7jHsSL7AEiFzidcdr8yKXT1tbrXnD4VImzjNGpuXXDcel-rHGyvzAwK6YnpBu3m9AjC1rGZZPR8L4v4XQJbgwAsoyjw__',
  },
  {
    id: 5,
    author: 'Richa Singh',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    categories: ['Tax Return', 'News', 'Audit'],
    image: 'https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k211o3vwxYOLc0OLGJaeuZqhf2W9OI13E2rJR7wqzZQ2Q~FzgdwVgC4Stvb8hGSAWbxSom7CM1b7lx8z-zH6jPnBU5-EuHL3~zHTLdaJBJFxhM4x~YRhWzezyOBqdLknKds9hexQK7-~cDiTbXd0jRsLzySVUxjJ9SAUiOzDyHxQ4nKjd87rQHGwAx-7x7IHRs-yh-hVcbncbk3dogw5dfO~T~zbWyHCiMNCsjTNT9CSIeuU1aj2OYGa65T1j7yDYFv4MUt-dK7KUoRKsGL52y2HhiaXYrevx~cQY8HpeUVdu2~3qAD05pGt9OncXREx1Mfo-Me4NEzJ2W9yo~Fw4w__',
  },
  {
    id: 6,
    author: 'Miss Nora',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Starting a community doesn\'t need to be complicated, but how do you get started?',
    categories: ['Private Limited Company', 'Customer Success'],
    image: 'https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2u4mD6neBFruO85Cq7FnP-tQC2CIjiTzzGYBCyQ7cCGIRk9VuT1vXub1PP4SWT2QKUCrq~hguezaTzzAMODGYusKMGvrK8fZQ3xs3aJcm5VDZwqoMpH8BiXJ4vKTc7B7YageG-Ky9MVzlGNNYDOKhROMOz6HUxL4RNVyHMouXZmhAZA2bBnTB8UGf8nMqdvYnlzNYCB-mR--pRiwmI4pSixVuPoJ0bflcPqX3fc3KfqWUjwB-cOLluHos769jHTt8w3r~qs4h50GI4-TKl~YS7Bmn7XM3Ye96gTH9iEANTxWMXqFxjLsRdIRRxbkLRQnC04tQN5W6zWrj6AundEgg__',
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-50 text-white rounded-lg overflow-hidden shadow-lg">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-orange-500 text-lg  font-semibold">{blog.author}</h3>
        <p className="text-gray-800 text-sm">{blog.date}</p>
        <h2 className="text-xl font-bold ">{blog.title}</h2>
        <p className="text-gray-800  text-sm ">{blog.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {blog.categories.map((category, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-3 py-1 text-black rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCards  = () => {
  return (
    <div className="bg-gray-50 text-white py-10 px-10 sm:px-20 lg:px-40">
      <h1 className="text-center text-xl font-lg text-orange-500 mb-2">Explore Our Blogs</h1>
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-6">Accelerate Digital Transformation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#1C4670] hover:bg-bg-[#1C4670] text-white font-semibold py-2 px-4 rounded">
          Show more blogs <span className="ml-2">&#x2794;</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCards;