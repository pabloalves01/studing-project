import QuickActions from "../../components/cards/quick-actions";
import StatusCard from "../../components/cards/stats-card";
import RecentSales from "../../components/cards/recent-sales";
import CashFlow from "../../components/cards/cash-flow";
import UnlockMoreBenefits from "../../components/cards/unlock-more-benefits";
import {
  DollarSign,
  Cog,
  FilePlus,
  ClipboardList,
  UserPen,
  ScrollText,
} from "lucide-react";
import SectionText from "../../components/text/section-text";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/usuarios");
        console.log("Dados recebidos:", response.data);
        setUsers(response.data);
      } catch (err) {
        setError("Erro ao buscar usuários");
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const actions = [
    {
      icon: <FilePlus />,
      title: "Novo Pedido",
      description: "Crie um novo pedido",
      href: "/pedido/novo",
    },
    {
      icon: <ScrollText />,
      title: "Gerenciar Pedido",
      description: "Acompanhe seus pedidos",
      href: "/pedido/gerenciar",
    },
    {
      icon: <UserPen />,
      title: "Gerenciar Clientes",
      description: "Adicione ou remova clientes",
      href: "/gerenciar-clientes",
    },
    {
      icon: <ClipboardList />,
      title: "Configurações",
      description: "Configure sua conta",
      href: "/configuracoes",
    },
  ];

  const sales = [
    {
      image: "/path/to/avatar1.jpg",
      name: "Pablo Alves",
      description: "Descrição da venda",
      email: "cliente1@example.com",
      value: 1200.5,
      payment_id: 1,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.5,
      payment_id: 2,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.79,
      payment_id: 3,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.0,
      payment_id: 4,
    },
    {
      image: "/path/to/avatar2.jpg",
      name: "Paulo Sérgio",
      description: "Descrição da venda",
      email: "cliente2@example.com",
      value: 950.0,
      payment_id: 1,
    },
  ];

  const cashFlow = [
    {
      title: "Salário",
      date: "13 de Março, às 13h30",
      value: 2500,
      operation_id: 2,
    },
    {
      title: "Dividendos",
      date: "13 de Março, às 13h30",
      value: 3500.5,
      operation_id: 1,
    },
    {
      title: "Aluguel",
      date: "13 de Março, às 13h30",
      value: 1000,
      operation_id: 3,
    },
    {
      title: "Combustível",
      date: "13 de Março, às 13h30",
      value: 350,
      operation_id: 2,
    },
    {
      title: "Criptomoedas",
      date: "13 de Março, às 13h30",
      value: 100,
      operation_id: 1,
    },
  ];

  return (
    <div className="container max-w-7xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionText
            title="Bom dia, Dev! ☀️"
            subtitle="Aqui estão os seus dados de hoje."
          />
          <div className="group">
            <Cog
              className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
              strokeWidth={1}
            />
          </div>{" "}
        </div>

        <QuickActions actions={actions} />

        {/* Grid dos StatusCards - 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            title="Total Diário"
            description="+20.1% from last day"
            value={1200.5}
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Semanal"
            description="+20.1% from last week"
            value={1200.5}
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Mensal"
            description="+20.1% from last month"
            value={1200.5}
            icon={<DollarSign />}
          />
          <StatusCard
            title="Total Anual"
            description="+20.1% from last year"
            value={1200.5}
            icon={<DollarSign />}
          />
        </div>

        {/* Grid dos Recent Sales e Gráfico - 2 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RecentSales sales={sales} />
          <CashFlow flows={cashFlow} />
        </div>
        <UnlockMoreBenefits />
        <div>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <div className="text-white text-2xl" key={user.id}>
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            ))
          ) : (
            <p>Sem usuários para exibir.</p>
          )}
        </div>
      </div>
    </div>
  );
}
