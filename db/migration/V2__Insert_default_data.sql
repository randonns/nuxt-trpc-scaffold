INSERT INTO Depts (id, name, createdAt) VALUES
  (1, '기획팀', NOW()),
  (2, '개발팀', NOW()),
  (3, '디자인팀', NOW()),
  (4, '운영팀', NOW()),
  (5, '영업팀', NOW());

INSERT INTO Users (name, age, deptId, createdAt) VALUES
  ('홍길동', 22, 1, NOW()),
  ('홍인형', 28, 2, NOW()),
  ('홍상직', 46, 4, NOW()),
  ('홍징', 71, 5, NOW());
