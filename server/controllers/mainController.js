/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "EasyNote",
    description: "Free NodeJS Notes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - EasyNote",
    description: "Free NodeJS Notes App.",
  }
  res.render('about', locals);
}

exports.features = async (req,res) => {
  const locals = {
    title: "Features - EasyNote",
    description: "Free NodeJS Notes App.",
  }
  res.render('features', locals);
}

exports.faqs = async (req, res) => {
  const locals = {
    title: "FAQs - EasyNote",
    description: "Free NodeJS Notes App.",
  }
  res.render('faqs', locals);
}