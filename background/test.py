import tornado.ioloop
import tornado.web
import os
import json
import shutil
import compare_search as cs
import indeximage as ii

class BaseHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "content-type")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
    def options(self):
        self.set_status(204) 

class MainHandler(BaseHandler):
    def get(self):
        self.write("Hello, world")

class UploadHandler(BaseHandler):
    def post(self):
        type = self.get_body_argument('class')
        print('add a pic')
        file_metas = self.request.files["file"]     
        for meta in file_metas:                                
            file_name = meta['filename']                    
            with open('./static/dataset/' + type + '/' + file_name, 'wb') as up:       
                up.write(meta['body'])    
        ii.index('./static/dataset/' + type + '/' + file_name)                                         
        self.write('ok')

class SearchLikeHandler(BaseHandler):
    def post(self):
        file_metas = self.request.files["file"]     
        if not os.path.exists('./static/searchlike/'):
            os.mkdir('./static/searchlike/')
        for meta in file_metas:                                
            file_name = meta['filename']                    
            with open('./static/searchlike/' + file_name, 'wb') as up:       
                up.write(meta['body'])
        result = cs.comp('./static/searchlike/' + file_name)
        llll = []
        for index in range(6):
            llll.append(result[index][0])
        self.write(json.dumps(llll))

class PicList(BaseHandler):
    def get(self):  
        print('get pic list')
        result = {}
        staticPath = './static/dataset/'
        classes = os.listdir(staticPath)
        for type in classes:
            result[type] = []
            if  os.path.isdir(staticPath + type):
                files = os.listdir(staticPath + type)
                for file in files:
                    result[type].append({'url': './dataset/' + type + '/' + file})
        self.write(json.dumps(result))
        
class ClassHandler(BaseHandler):
    def delete(self):
        staticPath = './static/dataset/'
        url = self.get_argument('class')
        try:
            shutil.rmtree(staticPath + url)
            print('delete a class' + url)
        except BaseException as e:
            print(e)
            self.set_status(500)
        self.write('ok')

class PicHandler(BaseHandler):
    def delete(self):
        url = self.get_argument('url')
        try:
            os.remove(url)
            print('delete a pic' + url)
        except:
            self.set_status(500)
        self.write('ok')

def make_app():
    return tornado.web.Application([
        ("/", MainHandler),
        ("/piclist", PicList),
        ("/upload", UploadHandler),
        ("/pic", PicHandler),
        ("/class", ClassHandler),
        ("/searchlike", SearchLikeHandler)
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()