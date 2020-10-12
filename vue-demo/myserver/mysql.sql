# 插入商品信息
# 字段：id pid title price oldprice product_desc carriage discounts img_src
INSERT INTO products VALUES (1, 1, '乐町小香风珍珠短款连衣裙2020春季新款女装气质收腰小个子裙子', 449, 649, '短款方形领口  前襟包边纽扣  侧边小巧', 5, 1, 'http://localhost:3000/images/clothesclass/dress/6.png');
INSERT INTO products VALUES (2, 1, '乐町吊带连衣裙2019新款秋季单排扣系带背带裙子仙女超仙森系', 189, 389, '单排扣系带背带裙', 10, 2, 'http://localhost:3000/images/clothesclass/dress/7.png');
INSERT INTO products VALUES (3, 1, '乐町睡衣女春秋夏薄款睡裙纯棉家居服白色甜美优雅花朵刺绣连衣裙', 169, 269, '竖条提花布  疏松柔软  柔肤细腻', 10, 2, 'http://localhost:3000/images/clothesclass/dress/8.png');
INSERT INTO products VALUES (4, 1, '乐町网纱连衣裙2020年春秋流行款波点网纱连衣裙', 399, 599, '', 5, 1, 'http://localhost:3000/images/clothesclass/dress/9.png');
INSERT INTO products VALUES (5, 1, '乐町法式小众连衣裙女2020新款气质吊带紧身连衣裙', 419, 699, '气质吊带  法式小众', 5, 1, 'http://localhost:3000/images/clothesclass/dress/10.png');
...其余省略

# 插入商品库存情况
# 字段：id pid color inventory
INSERT INTO product_inventory VALUES (1, 1, '粉色', 213);
INSERT INTO product_inventory VALUES (2, 1, '白色', 28);
INSERT INTO product_inventory VALUES (3, 1, '粉色', 0);
# 循环的数据
INSERT INTO product_inventory VALUES (57, 23, '粉色', 213);
INSERT INTO product_inventory VALUES (58, 24, '紫色', 28);
INSERT INTO product_inventory VALUES (59, 24, '粉色', 123);
INSERT INTO product_inventory VALUES (60, 25, '白色', 244);
INSERT INTO product_inventory VALUES (61, 26, '蓝色', 0);
INSERT INTO product_inventory VALUES (62, 26, '浅蓝色', 112);
INSERT INTO product_inventory VALUES (63, 27, '黑色', 89);
INSERT INTO product_inventory VALUES (64, 28, '红色', 5);
INSERT INTO product_inventory VALUES (65, 29, '白色', 115);
INSERT INTO product_inventory VALUES (66, 30, '白色', 33);

