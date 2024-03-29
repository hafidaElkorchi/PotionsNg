USE [PotionDb]
GO
/****** Object:  Table [dbo].[Ingredient]    Script Date: 15/01/2019 23:05:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredient](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](100) NOT NULL,
 CONSTRAINT [PK_Ingredient] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Potion]    Script Date: 15/01/2019 23:05:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Potion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](100) NOT NULL,
	[effect] [nchar](500) NOT NULL,
 CONSTRAINT [PK_Potion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[potionIngredient]    Script Date: 15/01/2019 23:05:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[potionIngredient](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[potion_id] [int] NOT NULL,
	[ingredient_id] [int] NOT NULL,
 CONSTRAINT [PK_potionIngredient] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ingredient] ON 

INSERT [dbo].[Ingredient] ([id], [name]) VALUES (1, N'Pour de Scarabée                                                                                    ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (2, N'Peau de serpent moulue                                                                              ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (3, N'Orteil de cyclope                                                                                   ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (4, N'Sang de crapeau                                                                                     ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (5, N'Eau                                                                                                 ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (6, N'Bave de limace                                                                                      ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (7, N'Jus d''araignée                                                                                      ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (8, N'Morve de lézard                                                                                     ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (9, N'Plume de corbeau                                                                                    ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (10, N'Essence de fantôme                                                                                  ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (11, N'Venin de serpent                                                                                    ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (12, N'ok                                                                                                  ')
INSERT [dbo].[Ingredient] ([id], [name]) VALUES (13, N'Hafida Ingredient                                                                                   ')
SET IDENTITY_INSERT [dbo].[Ingredient] OFF
ALTER TABLE [dbo].[potionIngredient]  WITH CHECK ADD  CONSTRAINT [FK_potionIngredient_Ingredient] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredient] ([id])
GO
ALTER TABLE [dbo].[potionIngredient] CHECK CONSTRAINT [FK_potionIngredient_Ingredient]
GO
ALTER TABLE [dbo].[potionIngredient]  WITH CHECK ADD  CONSTRAINT [FK_potionIngredient_Potion] FOREIGN KEY([potion_id])
REFERENCES [dbo].[Potion] ([id])
GO
ALTER TABLE [dbo].[potionIngredient] CHECK CONSTRAINT [FK_potionIngredient_Potion]
GO
