import logging
import aiohttp 

class ApiData(object):

    def __init__(self) -> None:  
        self.headers = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "DNT": "1",
            "Origin": "http://yc.wswj.net",
            "Referer": "http://yc.wswj.net/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        }
    
    async def getResData(self, request_data):
        async with aiohttp.ClientSession() as session:
            async with session.post(url="http://61.191.22.196:5566/AHSXX/service/PublicBusinessHandler.ashx",
                                    headers=self.headers,
                                    data=request_data) as response:
                if response.status == 200:
                    json_body = await response.text()
                    return json_body
                else:
                    logging.error(f"水文数据库服务器响应错误, 错误码: {response.status}")
                    raise ValueError("请求异常代码:", response.status)