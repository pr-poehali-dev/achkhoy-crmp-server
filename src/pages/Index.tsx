import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Topic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  category: string;
  timestamp: string;
}

const Index = () => {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: 1,
      title: 'Как получить первый уровень?',
      author: 'Игрок123',
      replies: 15,
      views: 234,
      category: 'faq',
      timestamp: '2 часа назад'
    },
    {
      id: 2,
      title: 'Обновление карты: новые локации',
      author: 'Администратор',
      replies: 42,
      views: 891,
      category: 'news',
      timestamp: '1 день назад'
    },
    {
      id: 3,
      title: 'Топ-10 игроков октября',
      author: 'Система',
      replies: 28,
      views: 567,
      category: 'stats',
      timestamp: '3 дня назад'
    }
  ]);

  const [newTopic, setNewTopic] = useState({ title: '', content: '' });
  const [onlinePlayers] = useState(127);

  const stats = {
    totalPlayers: 1547,
    totalTopics: 324,
    totalPosts: 2891
  };

  const handleCreateTopic = () => {
    if (newTopic.title && newTopic.content) {
      const topic: Topic = {
        id: topics.length + 1,
        title: newTopic.title,
        author: 'Гость',
        replies: 0,
        views: 0,
        category: 'faq',
        timestamp: 'только что'
      };
      setTopics([topic, ...topics]);
      setNewTopic({ title: '', content: '' });
    }
  };

  const faqData = [
    {
      question: 'Как начать играть на сервере?',
      answer: 'Скачайте клиент CRMP, добавьте IP сервера в избранное и подключитесь. После первого входа создайте персонажа и выберите фракцию.'
    },
    {
      question: 'Какие фракции доступны?',
      answer: 'На сервере доступны: Полиция, Медики, Таксисты, Мафия, Байкеры и другие группировки. Каждая фракция имеет уникальные возможности.'
    },
    {
      question: 'Как получить деньги?',
      answer: 'Деньги можно заработать выполняя работы (таксист, курьер), выполняя задания фракции, торгуя с игроками или через систему доната.'
    }
  ];

  const rules = [
    'Запрещено использование читов и сторонних программ',
    'Уважайте других игроков, оскорбления караются баном',
    'Не занимайтесь рекламой других серверов',
    'Следуйте ролевой составляющей игры',
    'Запрещен DeathMatch без RP причины'
  ];

  const donatPackages = [
    { name: 'Стартовый', price: 100, features: ['1000 игровых монет', 'VIP статус 7 дней', 'Уникальный скин'] },
    { name: 'Премиум', price: 500, features: ['5000 игровых монет', 'VIP статус 30 дней', '3 уникальных скина', 'Персональный автомобиль'] },
    { name: 'Легенда', price: 1000, features: ['15000 игровых монет', 'VIP статус 90 дней', '10 уникальных скинов', '3 премиум автомобиля', 'Особый цвет ника'] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Gamepad2" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  CRMP Ачхой-Мартан
                </h1>
                <p className="text-sm text-muted-foreground">Лучший ролевой сервер</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <div className="w-2 h-2 bg-green-500 rounded-full pulse-slow"></div>
                <span className="text-sm font-medium">{onlinePlayers} онлайн</span>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-scale animate-fade-in border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="Users" size={20} className="text-primary" />
                Всего игроков
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{stats.totalPlayers}</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in border-secondary/20" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="MessageSquare" size={20} className="text-secondary" />
                Тем на форуме
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-secondary">{stats.totalTopics}</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in border-accent/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="MessageCircle" size={20} className="text-accent" />
                Сообщений
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">{stats.totalPosts}</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in border-gaming-orange/20" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-gaming-orange" />
                Активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gaming-orange">+24%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="forum" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="forum" className="gap-2">
              <Icon name="MessageSquare" size={16} />
              Форум
            </TabsTrigger>
            <TabsTrigger value="faq" className="gap-2">
              <Icon name="HelpCircle" size={16} />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="rules" className="gap-2">
              <Icon name="Shield" size={16} />
              Правила
            </TabsTrigger>
            <TabsTrigger value="news" className="gap-2">
              <Icon name="Newspaper" size={16} />
              Новости
            </TabsTrigger>
            <TabsTrigger value="donate" className="gap-2">
              <Icon name="CreditCard" size={16} />
              Донат
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forum" className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PlusCircle" size={24} className="text-primary" />
                  Создать новую тему
                </CardTitle>
                <CardDescription>Задайте вопрос или начните обсуждение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Заголовок темы"
                  value={newTopic.title}
                  onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                />
                <Textarea
                  placeholder="Содержание вашего сообщения"
                  value={newTopic.content}
                  onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                  rows={4}
                />
                <Button onClick={handleCreateTopic} className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Опубликовать
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Icon name="Flame" size={24} className="text-secondary" />
                Активные обсуждения
              </h2>
              {topics.map((topic, index) => (
                <Card key={topic.id} className="hover-scale animate-fade-in cursor-pointer hover:border-primary/50 transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {topic.category === 'faq' && 'FAQ'}
                            {topic.category === 'news' && 'Новости'}
                            {topic.category === 'stats' && 'Статистика'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{topic.timestamp}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-1 hover:text-primary transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">Автор: {topic.author}</p>
                      </div>
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={16} />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{topic.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-4">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={24} className="text-primary" />
                  Часто задаваемые вопросы
                </CardTitle>
                <CardDescription>Ответы на самые популярные вопросы игроков</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-4">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-secondary" />
                  Правила сервера
                </CardTitle>
                <CardDescription>Соблюдение правил обязательно для всех игроков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Badge className="mt-0.5 bg-primary">{index + 1}</Badge>
                    <p className="flex-1">{rule}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-4">
            <Card className="animate-scale-in border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary">Важное</Badge>
                  <span className="text-sm text-muted-foreground">18 октября 2025</span>
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Newspaper" size={24} className="text-primary" />
                  Крупное обновление карты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Рады сообщить о выходе масштабного обновления карты Ачхой-Мартан! 
                  Добавлены новые локации, включая спортивный комплекс, торговый центр и расширенную промзону.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">+15 новых зданий</Badge>
                  <Badge variant="outline">Оптимизация</Badge>
                  <Badge variant="outline">Новые текстуры</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-l-4 border-l-secondary" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-secondary">Обновление</Badge>
                  <span className="text-sm text-muted-foreground">15 октября 2025</span>
                </div>
                <CardTitle>Новая система фракций</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Переработана система взаимодействия фракций. Теперь доступны новые квесты, 
                  улучшенная система репутации и эксклюзивные награды для активных участников.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donate" className="space-y-6">
            <Card className="animate-scale-in bg-gradient-to-br from-card to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="CreditCard" size={28} className="text-primary" />
                  Поддержите сервер
                </CardTitle>
                <CardDescription>Получите эксклюзивные привилегии и помогите развитию проекта</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donatPackages.map((pack, index) => (
                <Card key={index} className={`hover-scale animate-fade-in ${index === 1 ? 'border-primary border-2 relative' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{pack.name}</span>
                      <Icon name="Star" size={24} className={index === 1 ? 'text-primary' : 'text-muted-foreground'} />
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary">{pack.price}₽</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${index === 1 ? 'bg-primary' : 'bg-secondary'}`}>
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="Info" size={18} className="text-primary" />
                О сервере
              </h3>
              <p className="text-sm text-muted-foreground">
                CRMP Ачхой-Мартан - уникальный ролевой сервер с продуманной экономикой и захватывающим игровым процессом.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="Link" size={18} className="text-primary" />
                Быстрые ссылки
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Вконтакте</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Telegram</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="Server" size={18} className="text-primary" />
                Подключение
              </h3>
              <div className="text-sm space-y-2">
                <p className="text-muted-foreground">IP: <span className="text-primary font-mono">play.achkhoy.ru</span></p>
                <p className="text-muted-foreground">Порт: <span className="text-primary font-mono">7777</span></p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 CRMP Ачхой-Мартан. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
