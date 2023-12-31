CREATE TABLE Depts (
  id        INTEGER AUTO_INCREMENT,
  name      VARCHAR(100) NOT NULL,
  createdAt DATETIME NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Users (
  id        INTEGER AUTO_INCREMENT,
  name      VARCHAR(100) NOT NULL,
  age       INTEGER NOT NULL,
  deptId    INTEGER NOT NULL,
  createdAt DATETIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (deptId) REFERENCES Depts (id) ON DELETE CASCADE
);
